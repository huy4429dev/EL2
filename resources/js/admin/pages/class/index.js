const { Button, Table, Popconfirm, message, Input, Space } = require("antd");
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

const ClassPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [search, setSearch] = useState(null);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [courses, setCourses] = useState([]);

    const debouncedSearchQuery = useDebounce(search, 600);

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total: 0,
    });

    useEffect(async () => {
        setIsLoading(true);
        const { data } = await axios.get("/api/admin/class/", {
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
        setIsLoading(false);

    }, [pagination.current, debouncedSearchQuery, startDate, endDate]);

    useEffect(async () => {
        const { data } = await axios.get("/api/admin/course");
        setCourses(data.data);
    }, []);

    const handleTableChange = (pagination, filters, sorter) => {
        setPagination(pagination);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete("/api/admin/class/" + id);
            setPagination({
                ...pagination,
                total: pagination.total - 1
            })
            message.success("Xo?? tin t???c th??nh c??ng");
            queryClient.invalidateQueries("class");
        } catch ({ response }) {
            const { data } = response;
            message.error(data.error);
        }
    };

    return (
        <div>
            <Breadcrumb items={["L???p h???c"]}>
                <Space>
                    <Button
                        onClick={() => navigate("/admin/class/new")}
                        className="ml-auto"
                        type="primary"
                    >
                        Th??m l???p h???c
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
            <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
            >
                <Table
                    footer={() => `T???ng s??? l???p h???c ${pagination.total}`}
                    rowKey={(record) => record.id}
                    pagination={pagination}
                    onChange={handleTableChange}
                    columns={[
                        {
                            title: "STT",
                            render: (text, record, index) => index + 1,
                        },
                        {
                            title: "T??n ti??u ?????",
                            render: (text, record) => (
                                <Link to={`/admin/class/detail/${record.id}`}>
                                    {record.title}
                                </Link>
                            ),
                        },
                        {
                            title: "M?? code",
                            dataIndex: "code",
                        },
                        {
                            title: "Ghi ch??",
                            dataIndex: "note",
                        },
                        {
                            title: "S??? h???c vi??n",
                            dataIndex: "qty",
                        },
                        {
                            title: "Kho?? h???c",
                            render: (text, record, index) => {
                                return <span>{record.course.title}</span>;
                            },
                        },
                        {
                            title: "Ph??ng h???c",
                            render: (text, record, index) => {
                                return <span>{record.room?.name}</span>;
                            },
                        },
                        {
                            title: "Ng??y b???t ?????u",
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
                            title: "Ng??y k???t th??c",
                            render: (text, record, index) => {
                                return (
                                    <span>
                                        {moment(record.end_date).format(
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
                                            to={`/admin/class/${record.id}`}
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
export default ClassPage;
