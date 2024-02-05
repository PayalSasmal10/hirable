import loginData from "../../data/loginMock.json";
import { Button, Card, Flex, Form, Image, Input, Tabs } from "antd";
import loginImage from "../../assets/loginImage.svg";

export const LoginPage = () => {
  const [form] = Form.useForm();

  const onSubmitHandler = (values) => {
    const user = loginData.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (user) {
      console.log("Successfully Login");
    } else {
      console.log("Failed to Login");
    }
    form.resetFields();
  };

  const loginForm = () => {
    return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        form={form}
        onFinish={onSubmitHandler}
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
    <Flex justify="space-around" align="center">
      <Image src={loginImage} preview={{ visible: false }} />
      <Card
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <Tabs
          defaultActiveKey="1"
          size="small"
          items={["Freelancer", "Employer"].map((item) => {
            return {
              key: `${item}`,
              label: `${item}`,
              children: loginForm(),
            };
          })}
        />
      </Card>
    </Flex>
  );
};
