import freelancerloginData from "../../data/freelancerLoginMock.json";
import employerloginData from "../../data/employerLoginMockData.json";
import { Button, Card, Flex, Form, Image, Input, Tabs } from "antd";
import loginImage from "../../assets/loginImage.svg";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [form] = Form.useForm();
  const {token, name, login, firsNameSetter} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitHandler = (values, item) => {
    console.log("item", item);
    console.log("values", values);
    let user="";
    if(item === "Freelancer"){
        user = freelancerloginData.find(
            (user) => user.email === values.email && user.password === values.password
          );
          if (user) {
            console.log("Successfully Login");
            navigate('/freelancer');
      
          } else {
            console.log("Failed to Login");
          }
    }
    if(item === "Employer"){
        user = employerloginData.find(
            (user) => user.email === values.email && user.password === values.password
          );
          if (user) {
            console.log("Successfully Login");
      
          } else {
            console.log("Failed to Login");
          }
    }
   
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
