import { ApiResponse } from "../model";
import { AccountResponse, MemberInfo } from "../model";
import memberController from "../controller/MemberController";

const memberService = {
  getAccounts: async (): Promise<ApiResponse<AccountResponse>> => {
    try {
      const response = await memberController.getAccounts();
      return response;
    } catch (error) {
      console.error("Get accounts failed:", error);
      throw new Error(error as string);
    }
  },

  getMemberInfo: async (): Promise<ApiResponse<MemberInfo>> => {
    try {
      const response = await memberController.getMemberInfo();
      return response;
    } catch (error) {
      console.error("Get member info failed:", error);
      throw new Error(error as string);
    }
  },
};

export default memberService;
