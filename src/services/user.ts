import { request } from "./request";
import { mockUserList, appendMockUser, updateMockUser } from "./mock";

/**
 * 获取用户列表
 */
export const reqGetUserList: () => Promise<Api.User.UserListItem[]> = async () => {
  try {
    return await request.get("/student");
  } catch (error) {
    console.warn("/student 接口不可用，回退本地 mock 数据;", error);
    return mockUserList;
  }
  //   return request.get("/student/list");
};

/**
 * 创建用户
 */
export const reqCreateUser = async (data: Api.User.UserInfo): Promise<Api.User.UserListItem> => {
  try {
    return await request.post("/student", data);
  } catch (error) {
    console.warn("student/create 接口不可用，回退本地 mock 创建;", error);
    return appendMockUser(data);
  }
};

/**
 * 获取用户详情
 */
export const reqGetUserDetail = (id: number) => {
  return request.get(`/student/${id}`);
};

/**
 * 更新用户
 */
export const reqUpdateUser = async (id: number, data: Api.User.UserInfo): Promise<Api.User.UserListItem> => {
  try {
    return await request.patch(`/student/${id}`, data);
  } catch (error) {
    console.warn("student/update 接口不可用，回退本地 mock 更新;", error);
    return updateMockUser(id, data);
  }
};

/**
 * 删除用户
 */
export const reqDeleteUser = (id: number) => {
  return request.delete(`/student/${id}`);
};
