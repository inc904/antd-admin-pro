import type { TableColumnsType, TagProps } from "antd";
import { Button, Popconfirm, Space, Tag } from "antd";
import type { DepartmentItem } from "./data";

type DeptColumnActions = {
    onView?: (record: DepartmentItem) => void;
    onEdit?: (record: DepartmentItem) => void;
    onDelete?: (record: DepartmentItem) => void;
};

const typeMap: Record<DepartmentItem["type"], { color: TagProps["color"]; text: string }> = {
    root: { color: "gold", text: "根节点" },
    "province-dept": { color: "blue", text: "省级机构" },
    ministry: { color: "purple", text: "部" },
    supervision: { color: "cyan", text: "监察机构" },
    temple: { color: "geekblue", text: "寺" },
    judicial: { color: "volcano", text: "司法机构" },
    center: { color: "blue", text: "中心" },
    department: { color: "purple", text: "部门" },
    group: { color: "green", text: "小组" },
};

const statusMap: Record<DepartmentItem["status"], { color: TagProps["color"]; text: string }> = {
    enabled: { color: "green", text: "启用" },
    disabled: { color: "red", text: "停用" },
};

export function getDeptColumns(actions: DeptColumnActions = {}): TableColumnsType<DepartmentItem> {
    const { onView, onEdit, onDelete } = actions;

    return [
        {
            title: "部门名称",
            dataIndex: "name",
            key: "name",
            width: 180,
            fixed: "left",
        },
        {
            title: "部门编码",
            dataIndex: "code",
            key: "code",
            width: 180,
        },
        {
            title: "机构类型",
            dataIndex: "type",
            key: "type",
            width: 120,
            render: (value: DepartmentItem["type"]) => {
                const item = typeMap[value];
                return <Tag color={item.color}>{item.text}</Tag>;
            },
        },
        {
            title: "层级",
            dataIndex: "level",
            key: "level",
            width: 100,
            align: "center",
            render: (value: number) => `L${value}`,
        },
        {
            title: "上级部门",
            dataIndex: "parentName",
            key: "parentName",
            width: 140,
            render: (value: string | null) => value ?? "-",
        },
        {
            title: "负责人",
            dataIndex: "leader",
            key: "leader",
            width: 140,
        },
        {
            title: "状态",
            dataIndex: "status",
            key: "status",
            width: 100,
            align: "center",
            render: (value: DepartmentItem["status"]) => {
                const item = statusMap[value];
                return <Tag color={item.color}>{item.text}</Tag>;
            },
        },
        {
            title: "排序",
            dataIndex: "sort",
            key: "sort",
            width: 100,
            align: "center",
        },
        {
            title: "备注",
            dataIndex: "remark",
            key: "remark",
            ellipsis: true,
        },
        {
            title: "操作",
            key: "action",
            width: 220,
            fixed: "right",
            render: (_, record) => (
                <Space size="middle">
                    <Button type="link" size="small" onClick={() => onView?.(record)}>
                        查看
                    </Button>
                    <Button type="link" size="small" onClick={() => onEdit?.(record)}>
                        编辑
                    </Button>
                    <Popconfirm
                        title="确认删除该部门吗？"
                        okText="确认"
                        cancelText="取消"
                        onConfirm={() => onDelete?.(record)}
                    >
                        <Button type="link" size="small" danger>
                            删除
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
}