import { request } from "./request";

export const reqLogin = (data: Api.Auth.LoginParams) => {
  return request.post<Api.Auth.LoginResult, Api.Auth.LoginParams>("/auth/login", data);
};
