import axios from "axios";
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

import type { ApiBaseResponse } from "@/types/common/response";
import { storage } from "@/utils/storage";

function toError(input: unknown, fallback = "请求失败，请稍后重试"): Error {
  if (input instanceof Error) return input;
  if (typeof input === "string" && input.trim()) return new Error(input);
  return new Error(fallback);
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 请求拦截器
 */
instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // 添加token
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  (response) => {
    // 处理响应数据
    const { code, data, message } = response.data;
    console.log(' response', response)

    // 处理其他业务逻辑
    // 例如：token过期、权限不足等
    if (code === 401) {
      // token过期
      storage.removeToken();
      window.location.href = "/login";
      return Promise.reject(new Error("登录已过期，请重新登录"));
    } else if (code === 403) {
      // 权限不足
      console.error(message);
      return Promise.reject(new Error(message || "权限不足"));
    } else if (code === 500) {
      // 服务器错误
      console.error(message);
      return Promise.reject(new Error(message || "服务器错误"));
    } else if (code !== 200) {
      // 其他错误
      return Promise.reject(toError(message, `请求失败(code=${code ?? "unknown"})`));
    }

    return data;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      const serverMsg = error.response?.data?.message;
      const msg = serverMsg || error.message || "网络异常，请检查连接";
      return Promise.reject(new Error(msg));
    }
    return Promise.reject(toError(error, "未知错误"));
  },
);

type RequestConfig<D = unknown> = AxiosRequestConfig<D>;

export const request = {
  get<T>(url: string, config?: RequestConfig) {
    return instance.get<ApiBaseResponse<T>, T>(url, config);
  },
  delete<T>(url: string, config?: RequestConfig) {
    return instance.delete<ApiBaseResponse<T>, T>(url, config);
  },
  post<T, D = unknown>(url: string, data?: D, config?: RequestConfig<D>) {
    return instance.post<ApiBaseResponse<T>, T, D>(url, data, config);
  },
  put<T, D = unknown>(url: string, data?: D, config?: RequestConfig<D>) {
    return instance.put<ApiBaseResponse<T>, T, D>(url, data, config);
  },
  patch<T, D = unknown>(url: string, data?: D, config?: RequestConfig<D>) {
    return instance.patch<ApiBaseResponse<T>, T, D>(url, data, config);
  },
};
