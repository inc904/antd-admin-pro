import React, { useEffect, useState } from "react";
import { Flex, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

import { reqGetUserList } from "@/services/user";

type DataType = Api.User.UserItem & { key: string };

const columns: TableProps<DataType>["columns"] = [
  { title: "Name", dataIndex: "name", key: "name", render: (text) => <a>{text}</a> },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <Flex gap="small" align="center" wrap>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "kawaii") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="medium">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const UserManagement: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const list = await reqGetUserList();
        setData(list.map((item: Api.User.UserItem) => ({ ...item, key: String(item.id) })));
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return <Table<DataType> rowKey="id" columns={columns} loading={loading} dataSource={data} />;
};

export default UserManagement;
