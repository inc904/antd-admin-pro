export interface DataType {
  id: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export const mockUserList: Api.User.UserListItem[] = [
  {
    id: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    id: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["kawaii"],
  },
  {
    id: 3,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

let nextId = mockUserList.length + 1

export function appendMockUser(payload: Api.User.UserInfo): Api.User.UserListItem {
  const newUser: Api.User.UserListItem = {
    id: nextId++,
    ...payload
  }
  mockUserList.unshift(newUser)
  return newUser
}

export function updateMockUser(id: number, payload: Api.User.UserInfo): Api.User.UserListItem {
  const index = mockUserList.findIndex((item) => item.id === id)

  if (index === -1) {
    throw new Error(`未找到要更新的用户(id=${id})`)
  }

  const updatedUser: Api.User.UserListItem = {
    ...mockUserList[index],
    ...payload,
    id,
  }

  mockUserList[index] = updatedUser
  return updatedUser
}
