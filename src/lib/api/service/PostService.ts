import { AxiosError } from "axios";
import postingController from "../controller/PostingController";
import { ApiResponse } from "../model";
import {
  SNSPostingContent,
  SNSPostingDetailRequest,
  SNSPostingListRequest,
  SNSPostingResponse,
  TransferSNSPostingRequest,
  TransferSNSPostingResponse,
} from "../model/posting";

const postService = {
  getSNSPostingList: async (
    query: SNSPostingListRequest
  ): Promise<ApiResponse<SNSPostingResponse | null>> => {
    try {
      const response = await postingController.getSNSPostingList(query);
      return response;
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        /**
         * @description 계정을 찾을 수 없는 경우 데이터를 반환하지 않음
         * @todo 백엔드에서 인스타 계정 엑세스 유효 시간 늘어나거나 해결되는 경우 수정 예정
         */
        if (error.response?.data.error.code === "ACCOUNT_NOT_FOUND") {
          console.log("ACCOUNT_NOT_FOUND");
          return {
            result: "SUCCESS",
            data: null,
            error: {
              code: "ACCOUNT_NOT_FOUND",
              message: "계정을 찾을 수 없습니다.",
            },
          };
        }
      }
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

  transferSNSPosting: async (
    query: TransferSNSPostingRequest
  ): Promise<ApiResponse<TransferSNSPostingResponse>> => {
    try {
      const response = await postingController.transferSNSPosting(query);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("SNS 포스팅 변환 실패", { cause: error });
    }
  },

  recommendContentTitle: async (query: TransferSNSPostingRequest): Promise<ApiResponse<string>> => {
    try {
      const response = await postingController.recommendContentTitle(query);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("콘텐츠 제목 추천 실패", { cause: error });
    }
  },
};

export default postService;
