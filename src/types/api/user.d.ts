declare namespace Api.User {
  interface UserInfo {
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  type UserListItem = UserInfo & {
    id: number;
  };
}
