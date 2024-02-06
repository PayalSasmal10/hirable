import freelancerloginData from "../../data/freelancerLoginMock.json";
import employerloginData from "../../data/employerLoginMockData.json";
import { Button, Card, Flex, Form, Image, Input, Tabs } from "antd";
import loginImage from "../../assets/loginImage.svg";
import { useContext } from "react";
import { HirableContext } from "../../store/hirableContext";
import { withLogin } from "./loginHOC";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [form] = Form.useForm();
  const authContext = useContext(HirableContext);
  const navigate = useNavigate();
  const isLoggedIn = authContext.isLoggedIn;
  console.log("isLoggedIn from login", isLoggedIn);

  const onSubmitHandler = (values, item) => {
    console.log("values", values);
    console.log("item", item);

    const loginHandler = withLogin(
      item === "Freelancer" ? freelancerloginData : employerloginData,
      item
    );
    loginHandler(values, navigate, authContext, isLoggedIn);
    form.resetFields();
  };

  const loginForm = (item) => {
    return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        style={{
          maxWidth: 600,
        }}
        form={form}
        onFinish={(values) => onSubmitHandler(values, item)}
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
          <Input name="email" />
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
          <Input.Password name="password" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Flex justify="space-around" align="center" style={{ height: "100vh" }}>
      <Image src={loginImage} preview={{ visible: false }} />
      <Card
        bordered={false}
        style={{
          width: 300,
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        }}
      >
        <Tabs
          defaultActiveKey="1"
          size="small"
          items={["Freelancer", "Employer"].map((item) => {
            return {
              key: `${item}`,
              label: `${item}`,
              children: loginForm(item),
            };
          })}
        />
      </Card>
    </Flex>
  );
};
