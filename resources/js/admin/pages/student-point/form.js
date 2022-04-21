import { css } from "@emotion/react";
import {
    Button,
    Card,
    Descriptions,
    Form,
    Input,
    InputNumber,
    Popconfirm,
    Table,
    Typography,
} from "antd";
import React, { useState } from "react";

const originData = [
    {
        key: 1,
        name: `Edrward`,
        age: 32,
        address: `London Park no.`,
    },
];

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const { TextArea } = Input;
const OrderForm = ({
    onFinish,
    isEdit,
    onChecked,
    onChangeTotal,
    ...props
}) => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState("");

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            name: "",
            age: "",
            address: "",
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey("");
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey("");
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey("");
            }
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo);
        }
    };

    const columns = [
        {
            title: "Ghi chú",
            dataIndex: "name",
            width: "40%",
            editable: true,
        },
        {
            title: "Nghe",
            dataIndex: "age",
            width: "15%",
            editable: true,
        },
        {
            title: "Nói",
            dataIndex: "address",
            width: "15%",
            editable: true,
        },
        {
            title: "Đọc",
            dataIndex: "address",
            width: "15%",
            editable: true,
        },
        {
            title: "Viết",
            dataIndex: "address",
            width: "15%",
            editable: true,
        },
        {
            title: "action",
            dataIndex: "action",
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link
                        disabled={editingKey !== ""}
                        onClick={() => edit(record)}
                    >
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === "age" ? "number" : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <div>
            <Card>
                <Descriptions title="Thông tin học lớp học">
                    <Descriptions.Item label="Tên học viên">
                        Nguyễn Văn A
                    </Descriptions.Item>
                    <Descriptions.Item label="Mã lớp học">
                        Nguyễn Văn A
                    </Descriptions.Item>
                    <br />
                    <Descriptions.Item label="Phòng học">
                        Nguyễn Văn A
                    </Descriptions.Item>
                    <Descriptions.Item label="Số  lượng">
                        Nguyễn Văn A
                    </Descriptions.Item>
                </Descriptions>
            </Card>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={false}
                    style={{
                        width: "100%",
                    }}
                />
            </Form>
        </div>

        // <Form
        //     css={css`
        //         width: 600px;
        //     `}
        //     labelCol={{
        //         span: 6,
        //     }}
        //     form={form}
        //     onFinish={onFinish}
        //     scrollToFirstError
        //     {...props}
        // >
        //     {/* <Form.Item
        //         label="Điểm"
        //         name="point"
        //         rules={[
        //             {
        //                 required: true,
        //                 message: "Vui lòng nhập điểm",
        //             },
        //         ]}
        //     >
        //         <InputNumber
        //             defaultValue={
        //                 props.initialValues ? props.initialValues.point : ""
        //             }
        //         />
        //     </Form.Item>

        //     <Form.Item name="note" label="Ghi chú">
        //         <TextArea row={6} />
        //     </Form.Item>

        //     <Form.Item className="float-right">
        //         <Button type="primary" htmlType="submit">
        //             {isEdit ? "Cập nhật" : "Thêm mới"}
        //         </Button>
        //     </Form.Item> */}

        // </Form>
    );
};

export default OrderForm;
