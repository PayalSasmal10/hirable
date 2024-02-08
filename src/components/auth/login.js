import freelancerloginData from "../../data/freelancerLoginMock.json";
import employerloginData from "../../data/employerLoginMockData.json";
import { Button, Card, Flex, Form, Image, Input, Tabs } from "antd";
import loginImage from "../../assets/loginImage.svg";
import { useContext } from "react";
import { HirableContext } from "../../store/hirableContext";
import { withLogin } from "./loginHOC";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const LoginPage = () => {
  const [form] = Form.useForm();
  const authContext = useContext(HirableContext);
  const navigate = useNavigate();
  const isLoggedIn = authContext.isLoggedIn;

  const onSubmitHandler = (values, item) => {
    const loginHandler = withLogin(
      item === "Freelancer" ? freelancerloginData : employerloginData,
      item
    );
    loginHandler(values, navigate, authContext, isLoggedIn);
    form.resetFields();
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  const loginForm = (item) => {
    return (
      <Form
        {...layout}
        name="nest-messages"
        style={{
          maxWidth: 600,
        }}
        form={form}
        onFinish={(values) => onSubmitHandler(values, item)}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
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
          <Input.Password />
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
    <div className="login">
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
    </div>
  );
};
