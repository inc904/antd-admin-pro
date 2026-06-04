import { useState } from "react";
import { Button, Table } from "antd";
import { useQuery } from "@tanstack/react-query";

import { reqDeleteUser, reqGetUserList } from "@/services/user";
import { UserInfoDialog } from "./userinfo-dialog";
import { getUserColumns } from "./columns";

type UserListItem = Api.User.UserListItem;



const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"create" | "edit">("create");
  const [currentRecord, setCurrentRecord] = useState<UserListItem | null>(null);


  const columns = getUserColumns({
    onEdit: (record) => {
      setModalType("edit");
      setCurrentRecord(record);
      setIsModalOpen(true);
    },
    onDelete: (record) => {
      handleDelete(record.id);
    },
  });
  const { isLoading, data = [] } = useQuery({ queryKey: ["userList"], queryFn: reqGetUserList });

  const showModal = () => {
    setModalType("create");
    setCurrentRecord(null);
    setIsModalOpen(true);
  };

  const handleCloseModel = () => {
    setIsModalOpen(false);
    setCurrentRecord(null);
  };

  const handleDelete = (id: number) => {
    // TODO: 实现删除逻辑
    console.log("删除用户", id);
    reqDeleteUser(id);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="mb-4">
        创建用户
      </Button>

      <Table<UserListItem> rowKey="id" columns={columns} loading={isLoading} dataSource={data} />

      <UserInfoDialog isOpen={isModalOpen} onClose={handleCloseModel} type={modalType} record={currentRecord} />
    </>
  );
};

export default UserManagement;
