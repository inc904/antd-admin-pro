import { Flex, Button, Checkbox, Form, Input, message, Select } from 'antd';
import { Navigate, useNavigate } from "react-router";
import type { FormProps } from 'antd';

import { storage } from "@/utils/storage";
import { reqLogin } from '@/services/auth';

function setRole(role: string) {
  storage.setUserRole(role);
}
function setToken(token: string) {
  storage.setToken(token);
}

export default function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const token = localStorage.getItem("token");
  if (token) {
    // replace: true 表示替换当前历史记录，防止用户点击浏览器后退键又回到登录页
    return <Navigate to="/" replace />;
  }

  async function handleLogin() {

    const values = await form.validateFields();
    const { username, password } = values
    console.log(values)
    reqLogin({ username, password }).then((data) => {
      console.log('data', data);
      const { token, role } = data
      setToken(token)
      setRole(role)
      navigate("/");
    }).catch((err) => {
      messageApi.error(err.message || "登录失败");
    });

  }


  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const initialValues = {
    username: 'user1',
    password: 'user1',
    remember: 'true',
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  return (
    <Flex gap="medium" align="center" justify="center" vertical className="w-full h-screen bg-gray-100">
      <h1>登录页面</h1>
      <Select
        defaultValue={{ value: 'user1', label: 'user1' }}
        style={{ width: 120 }}
        labelInValue
        onChange={handleChange}
        options={[
          { value: 'user1', label: 'user1' },
          { value: 'admin1', label: 'admin1' },
          { value: 'guest1', label: 'guest1' },
        ]}
      />
      <div className="bg-white p-8 rounded-lg shadow-lg">

        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" onClick={handleLogin}>
              登录
            </Button>
          </Form.Item>
        </Form>


      </div>
      {contextHolder}
    </Flex>
  );
}
