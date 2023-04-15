import { http } from "@/utils/http";

export type InterfaceInfoResult = {
  code: number;
  data: {
    records: [
      {
        id: number;
        name: string;
        description: string;
        url: string;
        requestHeader: string;
        responseHeader: string;
        status: number;
        method: string;
        userId: number;
        createTime: string;
        updateTime: string;
      }
    ];
    total: number;
    size: number;
    current: number;
    orders: [];
    optimizeCountSql: boolean;
    searchCount: boolean;
    maxLimit: number;
    countId: number;
    pages: number;
  };
  message: string;
  description: string;
};

/**
 * 获取开放接口信息
 * @param params
 */
export const getOpenInterface = params => {
  return http.request<InterfaceInfoResult>(
    "get",
    "/api/backend/interface/getOpenInterface",
    {
      params
    }
  );
};
