const { Button, Table, Popconfirm, message, Input, Space, Switch } = require("antd");
import { DeleteFilled, EditFilled, CopyOutlined } from "@ant-design/icons";
import Breadcrumb from "../../components/breadcrumbs";
import { useNavigate } from "react-router";
import { useQueryClient, useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../lib/hook";
import moment from "moment";
import Calendar from "../../components/calendar";

const OrderPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [search, setSearch] = useState(null);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [classes, setClasses] = useState([]);

    const debouncedSearchQuery = useDebounce(search, 600);

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total: 0,
    });

    useEffect(async () => {
        setIsLoading(true)
        const { data } = await axios.get("/api/admin/order/", {
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
            total: data.total,
        });
        setData(data.data);
        setIsLoading(false)
    }, [pagination.current, debouncedSearchQuery, startDate, endDate]);

    const handleTableChange = (pagination, filters, sorter) => {
        setPagination(pagination);
    };

    useEffect(async () => {
        const { data } = await axios.get("/api/admin/class");
        setClasses(data.data);
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("/api/admin/order/" + id);
            setPagination({
                ...pagination,
                total: pagination.total - 1
            })
            message.success("Xo?? ????n ????ng k?? th??nh c??ng");
            queryClient.invalidateQueries("order");
        } catch ({ response }) {
            const { data } = response;
            message.error(data.error);
        }
    };

    const onChangeStatus = async (record) => {
        await axios.put("/api/admin/order/" + record.id, {
            ...record,
            status: !record.status,
        });
    };

    return (
        <div>
            <Breadcrumb items={["????n ????ng k?? ????ng k??"]}>
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
                        name = "startDate"
                        onChange={(date) => setStartDate(date)}
                        placeholder="Start date"
                    />
                    <Calendar
                        name = "endDate"
                        onChange={(date) => setEndDate(date)}
                        placeholder="End date"
                    />
                </Space>
            </Breadcrumb>
            <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
            >
                <Table
                    footer={() => `T???ng s??? ????n ????ng k?? ${pagination.total}`}
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
                            dataIndex: "fullName",
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
                            dataIndex: "total"
                        },
                        {
                            title: "L???p h???c",
                            render: (text, record, index) => {
                                const indexClass = classes.findIndex(i => i.id === record.class_id)
                                return (
                                    <span>
                                        {classes[indexClass]?.title}
                                    </span>
                                );
                            },
                        },
                        {
                            title: "Ng??y ????ng k??",
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
                            title: "Tr???ng th??i",
                            render: (text, record, index) => {
                                return (
                                    <Switch
                                        defaultChecked={record.status === 1}
                                        onChange={() => onChangeStatus(record)}
                                    />
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
                    dataSource={data}
                    loading={isloading}
                />
            </div>
        </div>
    );
};
export default OrderPage;
