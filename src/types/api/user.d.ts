declare namespace Api.User {
  interface UserItem {
    id: number;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  // type UserListResponse = Api.Http.Response<UserItem[]>;
}
