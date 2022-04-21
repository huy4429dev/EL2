import { css } from "@emotion/react";
import {
    Button, Form,
    Input ,DatePicker ,Col ,Checkbox ,Radio,Upload,Image,Progress ,Select
} from "antd";
import React, { useState , useEffect } from "react";
import { useQuery } from "react-query";
import moment from "moment";
import {
    InboxOutlined,
} from "@ant-design/icons";
import Calendar from "../../components/calendar";
const { Option } = Select;
const ContactForm = ({ onFinish, isEdit, ...props }) => {

    const [form] = Form.useForm();
    const { isLoading, data } = useQuery(["teacher"], async () => {
        const { data } = await axios.get("/api/admin/teacher");
        return data;
    });

    const [degrees, setDegrees] = useState([]);
    const [degree, setDegree] = useState([[degrees[0]?.id]]);

    useEffect(async () => {
        await axios.get("/api/admin/degree/").then((data) => {
            setDegrees(data.data.data);;
        });

    }, []);
  

    const [isActive, setIsActive] = useState(true);

    const uploadImage = async (options) => {
        const { onSuccess, onError, file, onProgress } = options;

        const fmData = new FormData();
        const config = {
            headers: { "content-type": "multipart/form-data" },
            onUploadProgress: (event) => {
                const percent = Math.floor((event.loaded / event.total) * 100);
                setProgress(percent);
                if (percent === 100) {
                    setTimeout(() => setProgress(0), 1000);
                }
                onProgress({ percent: (event.loaded / event.total) * 100 });
            },
        };
        fmData.append("file", file);
        try {
            const res = await axios.post("/api/admin/upload", fmData, config);

            return onSuccess(res.data.file);
        } catch (err) {
            console.log("Eroor: ", err);
            const error = new Error("Some error");
            onError({ err });
        }
    };

    const handleOnChange = ({ file, fileList, event }) => {
        if (file.status == "done") {
            setDefaultFileList([
                {
                    id: file.uid,
                    status: "done",
                    url: file.response,
                },
            ]);
        }
    };

    const handleChecked = (checked) => {
        setIsActive(checked);
        props.onChecked(checked)
    }

    const handleGetContent = (data) => {
        props.onEditor(data)
    }

    const [progress, setProgress] = useState(0);

    const [value, setValue] = React.useState(0);

    function onChange(e) {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);

    
   
  };
  const [defaultFileList, setDefaultFileList] = useState(
    props.initialValues
        ? [
            {
                id: -1,
                status: "done",
                url: asset(props.initialValues.thumbnail),
            },
        ]
        : []
);


    return (
        <Form
            css={css`
                width: 600px;
            `}
            labelCol={{
                span: 6,
            }}
            form={form}
            onFinish={onFinish}
            scrollToFirstError
            {...props}
        >
            <Form.Item
                name="name"
                label="Tài khoản"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập tài khoản",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập email",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="fullName"
                label="Họ và tên"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập họ và tên",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập địa chỉ",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="degress"
                label="Tên học vị"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập học vị",
                    },
                ]}
            >
                <Select
                    name="degress"
                    defaultValue={degrees[0]?.id}
                    showSearch
                    optionFilterProp="children"
                    onChange={(value) => setDegree(value)}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {degrees.map((item) => (
                        <Option key={item.id} value={item.id}>
                            {item.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="birthday"
                label="Ngày sinh"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập địa chỉ",
                    },
                ]}
            >
                <Calendar 
                autoFocus
                  name="birthday"
                  onChange={(value) => moment(value).format("YYYY-MM-DD")}
                  />
            </Form.Item>
            <Form.Item
                label="Giới tính"
                name="gender"
            >
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={0}>Nam</Radio>
                    <Radio value={1}>Nữ</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập số điện thoại",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="facebook"
                label="Facebook"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng facebook",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item className="float-right">
                <Button type="primary" htmlType="submit">
                    {isEdit ? "Cập nhật" : "Thêm mới"}
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;
