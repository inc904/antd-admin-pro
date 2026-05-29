import { ApiBaseResponse } from "../common/response";
declare namespace Api {
  // API 相关类型定义

  /**
   * HTTP 响应类型
   */
  namespace Http {
    type Response<T> = ApiBaseResponse<T>;
  }
}
