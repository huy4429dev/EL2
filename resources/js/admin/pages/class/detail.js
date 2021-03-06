import {
    Button,
    Card,
    Descriptions,
    Input,
    Space,
    Table,
    Popconfirm,
} from "antd";
import Breadcrumb from "../../components/breadcrumbs";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import moment from "moment";
import { useDebounce } from "../../../lib/hook";
import "../../../../css/app.css";
import Calendar from "../../components/calendar";
import { Link } from "react-router-dom";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { css } from "@emotion/react";

const DetailClassPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [qty, setQty] = useState("");
    const [days, setDays] = useState([]);
    const [orders, setOrders] = useState([]);
    const debouncedSearchQuery = useDebounce(search, 600);
    const [isloading, setIsLoading] = useState(false);
    const [search, setSearch] = useState(null);

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total: 0,
    });

    const { data } = useQuery(["class", [id]], async () => {
        const { data } = await axios.get("/api/admin/class/" + id);
        const arrDays = data.schedule?.days.split(",");
        setDays(arrDays);
        return data;
    });

    useEffect(async () => {
        setIsLoading(true);
        const res = await axios.get("/api/admin/order?classId=" + id, {
            params: {
                page: pagination.current,
                pageSize: pagination.pageSize,
                search: debouncedSearchQuery,
                start_date: startDate ? startDate : null,
                end_date: endDate ? endDate : null,
            },
        });
        setPagination({
            ...pagination,
            total: res.data.total,
        });
        setOrders(res.data.data);
        setIsLoading(false);
    }, [pagination.current, debouncedSearchQuery, startDate, endDate]);

    const handleTableChange = (pagination, filters, sorter) => {
        setPagination(pagination);
    };

    return (
        <div>
            <Breadcrumb items={["Chi ti???t l???p h???c"]}></Breadcrumb>
            {data && (
                <Card>
                    <Descriptions title="Th??ng tin l???p h???c">
                        <Descriptions.Item label="T??n l???p h???c">
                            {data.title}
                        </Descriptions.Item>
                        <Descriptions.Item label="M?? l???p h???c">
                            {data.code}
                        </Descriptions.Item>
                        <br />
                        <Descriptions.Item label="Ph??ng h???c">
                            {data.room?.name}
                        </Descriptions.Item>
                        <Descriptions.Item label="S???  l?????ng">
                            {data.qty}
                        </Descriptions.Item>
                        <Descriptions.Item label="Gi??o vi??n ph??? tr??ch">
                            {data.teacher?.name}
                        </Descriptions.Item>
                        <Descriptions.Item label="Ng??y b???t ?????u">
                            {data.start_date}
                        </Descriptions.Item>
                        <Descriptions.Item label="Ng??y k???t th??c">
                            {data.end_date}
                        </Descriptions.Item>
                        <br />
                        {days && (
                            <Descriptions.Item label="L???ch h???c">
                                <div style={{ display: "block" }}>
                                    {days.map((item) => {
                                        return (
                                            <span key={item}>Th??? {item}, </span>
                                        );
                                    })}{" "}
                                    <br />
                                    <div>
                                        T??? {data.schedule?.start_hour} - ?????n{" "}
                                        {data.schedule?.end_hour}
                                    </div>
                                </div>
                            </Descriptions.Item>
                        )}
                        <Descriptions.Item label="L??u ??">
                            {data.note}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            )}

            <div>
                {orders && (
                    <Card className="mt-2">
                        <Breadcrumb items={["????n ????ng k??"]}>
                            <Space>
                                <Button
                                    onClick={() => navigate("/admin/order/new")}
                                    className="ml-auto"
                                    type="primary"
                                >
                                    Th??m ????n ????ng k??
                                </Button>
                                <Input
                                    placeholder="T??m ki???m"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <Calendar
                                    name="startDate"
                                    onChange={(date) => setStartDate(date)}
                                    placeholder="Start date"
                                />
                                <Calendar
                                    name="endDate"
                                    onChange={(date) => setEndDate(date)}
                                    placeholder="End date"
                                />
                            </Space>
                        </Breadcrumb>
                        <Table
                            footer={() =>
                                `T???ng s??? ????n ????ng k?? ${pagination.total}`
                            }
                            rowKey={(record) => record.id}
                            pagination={pagination}
                            onChange={handleTableChange}
                            columns={[
                                {
                                    title: "STT",
                                    render: (text, record, index) => index + 1,
                                },
                                {
                                    title: "T??n h???c vi??n",
                                    render: (text, record) => (
                                        <Link
                                            to={`/admin/class/student-detail/${record.user_id}/${id}`}
                                        >
                                            {record.fullName}
                                        </Link>
                                    ),
                                },
                                {
                                    title: "S??? ??i???n tho???i",
                                    dataIndex: "phone",
                                },
                                {
                                    title: "?????a ch??? email",
                                    dataIndex: "email",
                                },
                                {
                                    title: "Ghi ch??",
                                    dataIndex: "note",
                                },
                                {
                                    title: "Gi?? ti???n",
                                    dataIndex: "total",
                                },
                                {
                                    title: "Ng??y ????ng k??",
                                    render: (text, record, index) => {
                                        return (
                                            <span>
                                                {moment(
                                                    record.created_at
                                                ).format("DD/MM/YYYY, hh:mm")}
                                            </span>
                                        );
                                    },
                                },
                                {
                                    width: 100,
                                    render: (text, record, index) => {
                                        return (
                                            <div key={index}>
                                                <Link
                                                    className="mr-2"
                                                    to={`/admin/order/${record.id}`}
                                                >
                                                    <EditFilled />
                                                </Link>
                                                <Popconfirm
                                                    title="X??c nh???n xo??"
                                                    onConfirm={() =>
                                                        handleDelete(record.id)
                                                    }
                                                >
                                                    <DeleteFilled
                                                        css={css`
                                                            color: red;
                                                        `}
                                                    />
                                                </Popconfirm>
                                            </div>
                                        );
                                    },
                                },
                            ]}
                            dataSource={orders}
                            loading={isloading}
                        />
                    </Card>
                )}
            </div>
        </div>
    );
};
export default DetailClassPage;
