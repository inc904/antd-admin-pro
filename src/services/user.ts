import { request } from "./request";
import { mockUserList } from "./mock";

/**
 * 获取用户列表
 */
export const reqGetUserList: () => Promise<Api.User.UserItem[]> = async () => {
  try {
    return await request.get("/user/list");
  } catch (error) {
    console.warn("user/list 接口不可用，回退本地 mock 数据;", error);
    return mockUserList;
  }
  //   return request.get("/user/list");
};

/**
 * 创建用户
 */
export const reqCreateUser = (data: Api.User.UserItem) => {
  return request.post("/user", data);
};

/**
 * 获取用户详情
 */
export const reqGetUserDetail = (id: number) => {
  return request.get(`/user/${id}`);
};

/**
 * 更新用户
 */
export const reqUpdateUser = (id: number, data: { username: string; password: string }) => {
  return request.put(`/user/${id}`, data);
};

/**
 * 删除用户
 */
export const reqDeleteUser = (id: number) => {
  return request.delete(`/user/${id}`);
};
