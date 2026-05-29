export interface DataType {
  id: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export const mockUserList: Api.User.UserItem[] = [
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
