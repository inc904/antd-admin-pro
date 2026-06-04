import { Button, Flex, Space, Tag } from "antd";
import type { TableProps } from "antd";

export const getUserColumns = (action: {
    onEdit: (record: Api.User.UserListItem) => void;
    onDelete: (record: Api.User.UserListItem) => void;
}): TableProps<Api.User.UserListItem>["columns"] => {
    return [
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
                            <Tag color={color} key={tag}>  {tag.toUpperCase()} </Tag>
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
                    <a onClick={() => action.onDelete(record)}>Delete</a>
                    <Button
                        type="link"
                        onClick={() => { action.onEdit(record); }}
                    >
                        Edit
                    </Button>
                </Space >
            ),
        },
    ];
};