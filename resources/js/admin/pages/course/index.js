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

const CoursePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [search, setSearch] = useState(null);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false)
    const [levels, setLevels] = useState([]);

    const debouncedSearchQuery = useDebounce(search, 600);

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total: 0,
    });

    useEffect(async () => {
        setIsLoading(true)
        const { data } = await axios.get("/api/admin/course/", {
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

    useEffect(async () => {
        const { data } = await axios.get("/api/admin/level");
        setLevels(data.data);
    }, []);

    const handleTableChange = (pagination, filters, sorter) => {
        setPagination(pagination);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete("/api/admin/course/" + id);
            setPagination({
                ...pagination,
                total: pagination.total - 1
            })
            message.success("Xo?? kho?? h???c th??nh c??ng");
            queryClient.invalidateQueries("course");
        } catch ({ response }) {
            const { data } = response;
            message.error(data.error);
        }
    };

    const onChangeStatus = async (record) => {
        await axios.put("/api/admin/course/" + record.id, {
            ...record,
            status: !record.status,
        });
    };

    return (
        <div>
            <Breadcrumb items={["Kho?? h???c"]}>
                <Space>
                    <Button
                        onClick={() => navigate("/admin/course/new")}
                        className="ml-auto"
                        type="primary"
                    >
                        Th??m kho?? h???c
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
                    footer={() => `T???ng s??? kho?? h???c ${pagination.total}`}
                    rowKey={(record) => record.id}
                    pagination={pagination}
                    onChange={handleTableChange}
                    columns={[
                        {
                            title: "STT",
                            render: (text, record, index) => index + 1,
                        },
                        {
                            title: "T??n kho?? h???c",
                            dataIndex: "title",
                        },
                        {
                            title: "???nh ?????i di???n",
                            render: (text, record, index) => {
                                return (
                                    <img
                                        src={record.thumbnail}
                                        alt={record.title}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                        }}
                                    />
                                );
                            },
                        },
                        {
                            title: "Gi??",
                            render: (text, record, index) => {
                                return (
                                    <span>
                                        {record.price}
                                    </span>
                                );
                            }
                        },
                        {
                            title: "???????ng d???n",
                            dataIndex: "slug",
                        },
                        {
                            title: "M?? t???",
                            dataIndex: "description",
                        },
                        {
                            title: "Tr??nh ?????",
                            render: (text, record, index) => {
                                const indexLevel = levels.findIndex(i => i.id === record.level_id)
                                return (
                                    <span>
                                        {levels[indexLevel]?.name}
                                    </span>
                                );
                            },
                        },
                        {
                            title: "S??? gi??? h???c",
                            dataIndex: "number_of_hours",
                        },
                        {
                            title: "Gi??",
                            dataIndex: "price",
                        },
                        {
                            title: "????nh gi??",
                            dataIndex: "rate",
                        },
                        {
                            title: "Ng??y t???o",
                            render: (text, record, index) => {
                                return (
                                    <span>
                                        {moment(record.start_date).format(
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
                                            to={`/admin/course/${record.id}`}
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
export default CoursePage;
