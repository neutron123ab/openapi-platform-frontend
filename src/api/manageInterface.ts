import {http} from "@/utils/http";

export type addInterfaceResult = {
  code: number;
  data: boolean;
  message: string;
  description: string;
};

export const addInterface = (data?: object) => {
  return http.request<addInterfaceResult>(
    "post",
    "/api/manager/interface/add",
    { data }
  );
};
