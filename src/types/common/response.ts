/**
 * API 基础响应接口
 */
export interface ApiBaseResponse<T> {
  code: number;
  data: T;
  message: string;
}
