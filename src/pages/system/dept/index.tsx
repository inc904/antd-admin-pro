import { Table } from 'antd'
import type { DepartmentItem, } from './data'
import { enterpriseDepartmentList } from './data'
import { getDeptColumns } from './columns'

export default function DeptManagement() {

    const columns = getDeptColumns({
        onView: (record) => {
            console.log("查看", record);
        },
        onEdit: (record) => {
            console.log("编辑", record);
        },
        onDelete: (record) => {
            console.log("删除", record);
        },
    });
    return (
        <>
            <h1>部门管理</h1>
            <div style={{ minWidth: 0, overflowX: "auto" }}>
                <Table<DepartmentItem> rowKey="id" columns={columns} loading={false} dataSource={enterpriseDepartmentList} />
            </div>
        </>
    )
}