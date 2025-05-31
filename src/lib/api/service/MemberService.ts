import { ApiResponse } from "../model";
import { AccountResponse } from "../model";
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
};

export default memberService;
