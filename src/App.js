import React from "react";
import { Form, Input, Button, Image, Row, Col, Typography } from "antd";

import axios from "axios";

import "./App.css";

import logInImage from "./assets/books.jpg";

const { Text } = Typography;

function App() {
  const onFinish = (values) => {
    const { email, password } = values;

    axios
      .post("http://localhost:4000/users/login", { email, password })
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ height: "100vh" }}>
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 32,
        }}
        span={5}
      >
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>
          Log in Daftar Hadir Online FKDB
        </Text>
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ width: "100%", marginTop: 32 }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col style={{ backgroundImage: `url(${logInImage})` }} span={19} />
    </Row>
  );
}

export default App;
