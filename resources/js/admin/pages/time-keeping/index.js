const { Button, Table, Popconfirm, message, Input, Space, DatePicker } = require("antd");
import { DeleteFilled, EditFilled, CopyOutlined } from "@ant-design/icons";
import Breadcrumb from "../../components/breadcrumbs";
import { useNavigate } from "react-router";
import { useQueryClient, useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Modal from '../../components/modal'
import { useDebounce } from "../../../lib/hook";

import moment from "moment";
import Calendar from "../../components/calendar";
import TabDate from "./components/TabDate";
import Form from "./components/form";

const CustomerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState(null);

  const getDate = new Date().toDateString()
  const { dateWeek, setDateWeek } = useState("");

  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState("");

  const debouncedSearchQuery = useDebounce(search, 600);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
  });

  const handleSetDate = (value) => {
    // setDateWeek(value)
    console.log(value ,'value');
  }

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };

  const handleDelete = async (id) => {
    // try {
    //     await axios.delete("/api/admin/teacher/" + id);
    //     setPagination({
    //         ...pagination,
    //         total: pagination.total - 1
    //     })
    //     message.success("Xoá giáo viên thành công");
    //     queryClient.invalidateQueries("teacher");
    // } catch ({ response }) {
    //     const { data } = response;
    //     message.error(data.error);
    // }
  };
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: 80,
    },
    {
      title: 'Registration Hours',
      children: [
        {
          title: 'Check in',
          dataIndex: 'checkin',
          key: 'checkin',
          width: 100,
        },
        {
          title: 'Check out',
          dataIndex: 'checkout',
          key: 'checkout',
          width: 100,
        },
      ],
    },
    {
      title: 'Checking time',
      children: [
        {
          title: 'Check in',
          dataIndex: 'checkintime',
          key: 'checkintime',
          width: 100,
        },
        {
          title: 'Check out',
          dataIndex: 'checkouttime',
          key: 'checkouttime',
          width: 100,
        },
      ],
    },
    {
      title: 'Result',
      children: [
        {
          title: 'Check in late',
          dataIndex: 'checkinlate',
          key: 'checkinlate',
          width: 100,
        },
        {
          title: 'Check out early',
          dataIndex: 'checkoutearly',
          key: 'checkoutearly',
          width: 120,
        },
      ],
    },
    {
      title: 'Edited by',
      dataIndex: 'editby',
      key: 'editby',
      width: 80,
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      className: "text-center",
      render: (text, record) => (
        <>
          {record.status ? (
            <span
              style={{ cursor: "pointer", minWidth: 100 }}
              className="badge bg-primary"
            >
              Đang hoạt động
            </span>
          ) : (
            <span
              style={{ cursor: "pointer", minWidth: 100 }}
              className="badge bg-warning "
            >
              Tạm ngưng
            </span>
          )}
        </>
      ),
    },
    {
      title: 'Complain',
      dataIndex: 'complain',
      key: 'complain',
      width: 100,
    },
    {
      title: 'Complanin Reply',
      dataIndex: 'complainreply',
      key: 'complainreply',
      width: 100,
    },
    {
      title: "Action",
      dataIndex: "add",
      key: "add",
      render: (text, record) => (
        <>
          <Button
            className="ml-auto"
            type="primary"
            onClick={() => {
              setVisible(true);
              setAction("add");
            }}
          >
            Complation
          </Button>

        </>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      date: '15/04/2022',
      checkin: '08:30',
      checkout: '17:30',
      checkintime: '08:30',
      checkouttime: '17:30',
      checkinlate: '-10',
      checkoutearly: '0',
      editby: 'Kien Trinh',
      status: true,
      complain: 'Deline',
      complainreply: 'Heloo'
    });
  }


  return (
    <div>
      <div className="site-layout-background mb-3 mt-3" style={{ padding: 10, minHeight: 60 }}> 
      <Breadcrumb items={[`${getDate}`]}>
        <Space>

          <Button type="primary" size='default'>
            Refesh
          </Button>
          <Button type="danger" size='default'>
            To day
          </Button>
          <Calendar
            name="datetime"
            // onChange={(date) => setStartDate(date)}
            placeholder="Select date"
            picker={dateWeek}
          />
          <Button onClick={() => handleSetDate("month")}>Day</Button>
          <Button onClick={() => handleSetDate("week")}>
            Week
          </Button>
        </Space>
      </Breadcrumb>

      <TabDate />
      </div>

      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >

        <Space className="mb-5">
          Total Punished : 3  <DatePicker size='default' picker="year" /> <DatePicker size='default' picker="month" />
        </Space>

        <Table
          columns={columns}
          dataSource={data}
          bordered
          size="middle"
        />
      </div>

      {visible && (
        <Modal
          title={action === "add" ? "Thêm" : "Thông tin chi tiết"}
          width={567}
          visible={visible}
          onCancel={() => {
            setVisible(false);
            setAction("");
            setItem(null);
          }}
          footer={null}
        >
          <div>
            <Form/>

            
          </div>
        </Modal>
      )}
    </div>
  );
};
export default CustomerPage;
