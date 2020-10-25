import React, { useState } from "react";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  InputNumber,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

function DonationForm() {
  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 32 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Form {...layout} validateMessages={validateMessages}>
        <Form.Item
          name="amount"
          label="Amount"
          rules={[
            {
              type: "number",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Full Name"
          rules={[
            {
              required: true,
              message: "Please enter you name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="mobile"
          label="Mobile Number"
          rules={[
            {
              type: "number",
            },
            {
              required: true,
              message: "Please enter your mobile number!",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please enter you name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}

export default DonationForm;
