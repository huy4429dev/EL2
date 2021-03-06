import { Button, Card, Descriptions, Input, Space, Table } from "antd";
import Breadcrumb from "../../components/breadcrumbs";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import moment from "moment";
import { useDebounce } from "../../../lib/hook";
import "../../../../css/app.css";
import Calendar from "../../components/calendar";
import { Link } from "react-router-dom";
import { EditFilled,FileExcelOutlined,FilePdfOutlined } from "@ant-design/icons";

const DetailStudentPage = () => {
    const navigate = useNavigate();
    const { id, classId } = useParams();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [days, setDays] = useState([]);
    const [orders, setOrders] = useState([]);
    const [points, setPoints] = useState([]);
    const debouncedSearchQuery = useDebounce(search, 600);
    const [isloading, setIsLoading] = useState(false);

    const [search, setSearch] = useState(null);
    const [searchOrder, setSearchOrder] = useState(null);

    const [paginationPoint, setPaginationPoint] = useState({
        current: 1,
        pageSize: 5,
        total: 0,
    });

    const [paginationOrder, setPaginationOrder] = useState({
        current: 1,
        pageSize: 5,
        total: 0,
    });

    const { isLoading, data } = useQuery(["class", [id]], async () => {
        const { data } = await axios.get(
            "/api/admin/class/student-info/" + id + "/" + classId
        );
        const arrDays = data.class.schedule?.days.split(",");
        setDays(arrDays);
        return data;
    });

    useEffect(async () => {
        setIsLoading(true);
        const res = await axios.get(
            "/api/admin/student-point?class_id=" + classId,
            {
                params: {
                    page: paginationPoint.current,
                    pageSize: paginationPoint.pageSize,
                    search: searchOrder,
                    start_date: startDate ? startDate : null,
                    end_date: endDate ? endDate : null,
                },
            }
        );
        setPaginationPoint({
            ...paginationPoint,
            total: res.data.total,
        });

        setPoints(res.data.data);
        setIsLoading(false);
    }, [paginationPoint.current, searchOrder, startDate, endDate]);

    useEffect(async () => {
        setIsLoading(true);
        if (!data?.order) return;
        const res = await axios.get(
            "/api/admin/order-history?order_id=" + data.order?.id,
            {
                params: {
                    page: paginationOrder.current,
                    pageSize: paginationOrder.pageSize,
                    search: debouncedSearchQuery,
                    start_date: startDate ? startDate : null,
                    end_date: endDate ? endDate : null,
                },
            }
        );
        setPaginationOrder({
            ...paginationOrder,
            total: res.data.total,
        });
        setOrders(res.data.data);
        setIsLoading(false);
    }, [
        paginationOrder.current,
        debouncedSearchQuery,
        startDate,
        endDate,
        data,
    ]);

    const handleTablePointChange = (pagination, filters, sorter) => {
        paginationPoint(pagination);
    };

    const handleTableOrderChange = (pagination, filters, sorter) => {
        setPaginationOrder(pagination);
    };
    return (
        <div>
            <Breadcrumb items={["Chi ti???t h???c sinh"]}></Breadcrumb>
            {data && (
                <div>
                    <Card>
                        <Descriptions title="Th??ng tin h???c l???p h???c">
                            <Descriptions.Item label="T??n l???p h???c">
                                {data.class.title}
                            </Descriptions.Item>
                            <Descriptions.Item label="M?? l???p h???c">
                                {data.class.code}
                            </Descriptions.Item>
                            <br />
                            <Descriptions.Item label="Ph??ng h???c">
                                {data.class.room?.name}
                            </Descriptions.Item>
                            <Descriptions.Item label="S???  l?????ng">
                                {data.class.qty}
                            </Descriptions.Item>
                            <Descriptions.Item label="Gi??o vi??n ph??? tr??ch">
                                {data.class.teacher?.name}
                            </Descriptions.Item>
                            <Descriptions.Item label="Ng??y b???t ?????u">
                                {data.class.start_date}
                            </Descriptions.Item>
                            <Descriptions.Item label="Ng??y k???t th??c">
                                {data.class.end_date}
                            </Descriptions.Item>
                            <br />
                            {days && (
                                <Descriptions.Item label="L???ch h???c">
                                    <div style={{ display: "block" }}>
                                        {days.map((item) => {
                                            return (
                                                <span key={item}>
                                                    Th??? {item},{" "}
                                                </span>
                                            );
                                        })}{" "}
                                        <br />
                                        <div>
                                            T??? {data.class.schedule?.start_hour}{" "}
                                            - ?????n{" "}
                                            {data.class.schedule?.end_hour}
                                        </div>
                                    </div>
                                </Descriptions.Item>
                            )}
                            <Descriptions.Item label="L??u ??">
                                {data.class.note}
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                    <Card className="mt-2">
                        <Descriptions title="Th??ng tin h???c vi??n">
                            <Descriptions.Item label="T??n h???c vi??n">
                                {data.student?.profile?.name}
                            </Descriptions.Item>
                            <Descriptions.Item label="Email">
                                {data.student?.email}
                            </Descriptions.Item>
                            <Descriptions.Item label="??i???n tho???i">
                                {data.student?.profile?.phone}
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                    <Card className="mt-2">
                        <Descriptions title="H???c ph??">
                            <Descriptions.Item label="T???ng h???c ph??">
                                {data.order?.total?.toLocaleString()} ??
                            </Descriptions.Item>
                            <Descriptions.Item label="???? thanh to??n">
                                {data.student?.email}
                            </Descriptions.Item>
                            <br />
                            <Descriptions.Item label="Ghi ch??">
                                {data.order?.note}
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </div>
            )}
            <div>
                <Card className="mt-2">
                    <Breadcrumb items={["??i???m h???c vi??n"]}>
                        <Space>
                            <Button
                                onClick={() =>
                                    navigate(
                                        "/admin/student-point/new/" +
                                            data.student?.id +
                                            "/" +
                                            data.class?.id
                                    )
                                }
                                className="ml-auto"
                                type="primary"
                            >
                                Th??m m???i
                            </Button>
                            <Input
                                placeholder="T??m ki???m"
                                value={searchOrder}
                                onChange={(e) => setSearchOrder(e.target.value)}
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
                        footer={() => `T???ng s??? ??i???m ${paginationPoint.total}`}
                        rowKey={(record) => record.id}
                        pagination={paginationPoint}
                        onChange={handleTablePointChange}
                        columns={[
                            {
                                title: "STT",
                                render: (text, record, index) => index + 1,
                            },
                            {
                                title: "??i???m",
                                dataIndex: "point",
                            },
                            {
                                title: "Ghi ch??",
                                dataIndex: "note",
                            },
                            {
                                title: "Ng??y t???o",
                                render: (text, record, index) => {
                                    return (
                                        <span>
                                            {moment(record.created_at).format(
                                                "DD/MM/YYYY, hh:mm"
                                            )}
                                        </span>
                                    );
                                },
                            },
                            {
                                title: "Ng??y c???p nh???t",
                                render: (text, record, index) => {
                                    return (
                                        <span>
                                            {moment(record.updated_at).format(
                                                "DD/MM/YYYY, hh:mm"
                                            )}
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
                                                to={`/admin/student-point/${data.student?.id}/${data.class?.id}/${record.id}`}
                                            >
                                                <EditFilled />
                                            </Link>
                                        </div>
                                    );
                                },
                            },
                        ]}
                        dataSource={points}
                        loading={isloading}
                    />
                </Card>
            </div>
            <div>
                {orders && (
                    <Card className="mt-2">
                        <Breadcrumb items={["L???ch s??? thanh to??n"]}>
                            <Space>
                                 <Button
                                    onClick={() =>
                                      {
                                        window.location.href = "/api/admin/order/export-pdf/" + data.order?.id
                                      }
                                    }
                                    className="ml-auto"
                                    type="primary"
                                    >
                                    <FilePdfOutlined />
                                </Button>
                                <Button
                                    onClick={() =>
                                      {
                                        window.location.href = "/api/admin/order/export/" + data.order?.id
                                      }
                                    }
                                    className="ml-auto bg-success"
                                    type="primary"
                                >
                                    <FileExcelOutlined />
                                </Button>

                                <Button
                                    onClick={() =>
                                        navigate(
                                            `/admin/order-history/new/${data.order?.id}`
                                        )
                                    }
                                    className="ml-auto"
                                    type="primary"
                                >
                                    Th??m m???i
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
                                `T???ng s??? ????n ????ng k?? ${paginationOrder.total}`
                            }
                            rowKey={(record) => record.id}
                            pagination={paginationOrder}
                            onChange={handleTableOrderChange}
                            columns={[
                                {
                                    title: "STT",
                                    render: (text, record, index) => index + 1,
                                },
                                {
                                    title: "Ng?????i n???p",
                                    dataIndex: "fullName",
                                },
                                {
                                    title: "Ng?????i thu",
                                    render: (text, record, index) => {
                                        return (
                                            <span>{record.creator.email}</span>
                                        );
                                    },
                                },
                                {
                                    title: "S??? ti???n",
                                    render: (text, record, index) => {
                                        return (
                                            <span>
                                                {record.total.toLocaleString()}{" "}
                                                ??
                                            </span>
                                        );
                                    },
                                },
                                {
                                    title: "Ghi ch??",
                                    dataIndex: "note",
                                },
                                {
                                    title: "Ng??y n???p",
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
                                    title: "Ng??y c???p nh???t",
                                    render: (text, record, index) => {
                                        return (
                                            <span>
                                                {moment(
                                                    record.updated_at
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
                                                    to={`/admin/order-history/${record.id}`}
                                                >
                                                    <EditFilled />
                                                </Link>
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
export default DetailStudentPage;
