import { apiClient } from "../axios/instance";
import { ApiResponse } from "../model";
import { AccountResponse } from "../model";

const memberController = {
  getAccounts: async (): Promise<ApiResponse<AccountResponse>> => {
    const response = await apiClient.get<ApiResponse<AccountResponse>>("/member/accounts");
    return response.data;
  },
};

export default memberController;
