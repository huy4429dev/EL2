import React from 'react'
// import { useForm, Controller } from "react-hook-form";
import { Row, Col, message, Button } from 'antd';
import { Input } from 'antd';

export default function Form() {
  return (
    <div>
        <h2>Hello Kane</h2>
         {/* <form onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={16}>
                    <Col md={24} className="mb-3">
                        <Controller
                            render={({ field, fieldState: { error } }) => (
                                <Input
                                    {...field}
                                    autoFocus
                                    name="fullName"
                                    label="Họ tên"
                                    placeholder="Họ tên..."
                                    error={error}
                                />
                            )}
                            name="fullName"
                            control={control}
                        />
                    </Col>
                    <Col md={24} className="mb-3">
                        <Controller
                            render={({ field, fieldState: { error } }) => (
                                <Input
                                    {...field}
                                    autoFocus
                                    name="email"
                                    label="Email"
                                    placeholder="Email ..."
                                    error={error}
                                    disabled
                                />
                            )}
                            name="email"
                            control={control}
                        />
                    </Col>


                </Row>
                <div className="d-flex mt-2">
                    <Button text={action === "add" ? "Thêm" : "Sửa"} className="ml-auto"
                        onClick={() => handleSubmit(onSubmit)()}
                    />
                </div>
            </form> */}
    </div>
  )
}
