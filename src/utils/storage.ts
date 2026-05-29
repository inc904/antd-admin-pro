/** 存储工具类 */
export const storage = {
  /** 存储token */
  setToken: (token: string) => {
    localStorage.setItem("token", token);
  },
  /** 获取token */
  getToken: () => {
    return localStorage.getItem("token");
  },
  /** 删除token */
  removeToken: () => {
    localStorage.removeItem("token");
  },
  /** 存储用户角色 */
  setUserRole: (role: string) => {
    localStorage.setItem("userRole", role);
  },
  /** 获取用户角色 */
  getUserRole: () => {
    return localStorage.getItem("userRole");
  },
  /** 删除用户角色 */
  removeUserRole: () => {
    localStorage.removeItem("userRole");
  },
};
