import { http } from "@/utils/http";

export type UserResult = {
  code: number;
  data: {
    id: number;
    /** 用户名 */
    username: string;
    /** 当前登陆用户的账号 */
    account: string;
    /** 用户创建时间 */
    createTime: string;
    /** 用户角色（0-普通用户，1-管理员） */
    userRole: number;
  };
  message: string;
  description: string;
};

export type RegisterResult = {
  code: number;
  data: boolean;
  message: string;
  description: string;
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/api/user/login", { data });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};

/**
 * 注册
 */
export const getRegister = (data?: object) => {
  return http.request<RegisterResult>("post", "/api/user/register", { data });
};
