import { request } from "./request";

export const reqLogin = (data: { username: string; password: string }) => {
  return request.post("/user/login", data);
};
