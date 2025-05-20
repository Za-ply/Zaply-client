import { apiClient } from "../axios/instance";
import { ApiResponse } from "../model";
import { AccountResponse, MemberInfo } from "../model/member";

const memberController = {
  getAccounts: async (): Promise<ApiResponse<AccountResponse>> => {
    const response = await apiClient.get<ApiResponse<AccountResponse>>("/member/accounts");
    return response.data;
  },

  getMemberInfo: async (): Promise<ApiResponse<MemberInfo>> => {
    const response = await apiClient.get<ApiResponse<MemberInfo>>("/member");
    return response.data;
  },
};

export default memberController;
