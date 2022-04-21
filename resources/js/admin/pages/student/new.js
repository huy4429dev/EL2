import { message } from "antd";
import Breadcrumb from "../../components/breadcrumbs";
import { useNavigate } from "react-router";
import { useQueryClient } from "react-query";
import Form from "./form";
import { useState } from "react";

const CreateStudentPage = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const onFinish = async (values) => {
        values = { ...values}
        try {
            await axios.post("/api/admin/student", values);
            message.success("Thêm học viên thành công");
            queryClient.invalidateQueries("student");
            navigate("/admin/student");
        } catch ({ response }) {
            const { data } = response;
            message.error(data.message);
        }
    };

    return (
        <div>
            <Breadcrumb items={["Học viên", "Thêm mới"]} />
            <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
            >
                <div className="d-flex justify-content-center">
                    <Form
                        onFinish={onFinish}
                        onChecked={(value) => setStatus(value)}
                        onEditor={(data) => setContent(data)}
                    />
                </div>
            </div>
        </div>
    );
};
export default CreateStudentPage;
