import { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Select, Space, message } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reqCreateUser, reqUpdateUser } from "@/services/user";

const tagOptions = [
  { label: "nice", value: "nice" },
  { label: "developer", value: "developer" },
  { label: "kawaii", value: "kawaii" },
  { label: "cool", value: "cool" },
  { label: "teacher", value: "teacher" },
];

const rules = {
  name: [{ required: true, message: "Please input your username!" }],
  age: [{ required: true, message: "Please input your age!" }],
};

type UserFormValues = {
  name: string;
  age: number | string;
  address?: string;
  tags?: string[];
};

export const UserInfoDialog = ({
  isOpen,
  onClose,
  type,
  record,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: "create" | "edit";
  record: Api.User.UserListItem | null;
}) => {
  const title = type === "create" ? "创建用户" : "编辑用户";
  const [form] = Form.useForm<UserFormValues>();
  const [confirmLoading, setConfirmLoading] = useState(false);

  // Access the client
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: Api.User.UserInfo) => {
      if (type === "edit" && record) {
        return reqUpdateUser(record.id, payload);
      }
      return reqCreateUser(payload);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["userList"] });
    },
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (type === "edit" && record) {
      form.setFieldsValue({
        name: record.name,
        age: record.age,
        address: record.address,
        tags: record.tags,
      });
      return;
    }

    form.resetFields();
  }, [form, isOpen, record, type]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const { name, address, age, tags } = values
      const payload: Api.User.UserInfo = {
        name,
        age: Number(age),
        address: address ?? '',
        tags: tags ?? []
      }

      setConfirmLoading(true)
      await mutation.mutateAsync(payload)
      message.success(type === "create" ? "创建成功" : "更新成功");
      form.resetFields()
      onClose()
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message || (type === "create" ? "创建失败" : "更新失败"));
      }
    } finally {
      setConfirmLoading(false);
    }
  };

  return (
    <div>
      <Modal
        mask={{ closable: false }}
        title={title}
        open={isOpen}
        onOk={handleSubmit}
        onCancel={onClose}
        confirmLoading={confirmLoading}
        destroyOnHidden
        okText={type === "create" ? "创建" : "保存"}
        cancelText="取消"
      >
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} form={form}>
          <Form.Item label="Username" name="name" rules={rules.name}>
            <Input />
          </Form.Item>
          <Form.Item label="Age" name="age" rules={rules.age}>
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input />
          </Form.Item>
          <Form.Item label="Tag" name="tags">
            <Select options={tagOptions} mode="multiple" />
          </Form.Item>
          {/* <Form.Item label={null} wrapperCol={{ span: 20, offset: 4 }}>
            <Space>
              <Button type="primary" onClick={handleSubmit} loading={confirmLoading}>
                {type === "create" ? "创建" : "保存"}
              </Button>
            </Space>
          </Form.Item> */}
        </Form>
      </Modal>
    </div>
  );
};
