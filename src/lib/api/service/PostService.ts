import postingController from "../controller/PostingController";
import { ApiResponse } from "../model";
import {
  SNSPostingContent,
  SNSPostingDetailRequest,
  SNSPostingListRequest,
  SNSPostingResponse,
} from "../model/posting";

const postService = {
  getSNSPostingList: async (
    query: SNSPostingListRequest
  ): Promise<ApiResponse<SNSPostingResponse>> => {
    try {
      const response = await postingController.getSNSPostingList(query);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("SNS 포스팅 목록 조회 실패", { cause: error });
    }
  },

  getSNSPostingDetail: async (
    query: SNSPostingDetailRequest
  ): Promise<ApiResponse<SNSPostingContent>> => {
    try {
      const response = await postingController.getSNSPostingDetail(query);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("SNS 포스팅 상세 조회 실패", { cause: error });
    }
  },
};

export default postService;
