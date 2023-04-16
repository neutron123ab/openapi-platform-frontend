import { http } from "@/utils/http";

export type InvokeResult = {
  code: number;
  data: object;
  message: string;
  description: string;
};

/**
 * 用户在线调用接口
 * @param data
 */
export const invokeInterface = (data?: object) => {
  return http.request<InvokeResult>("post", "/api/backend/interface/invoke", {
    data
  });
};
