import { apiClient } from "../axios/instance";
import { ApiResponse } from "../model";
import {
  SNSPostingContent,
  SNSPostingDetailRequest,
  SNSPostingListRequest,
  SNSPostingResponse,
} from "../model/posting";

const postingController = {
  getSNSPostingList: async (
    query: SNSPostingListRequest
  ): Promise<ApiResponse<SNSPostingResponse>> => {
    const response = await apiClient.get<ApiResponse<SNSPostingResponse>>("/posting/my-media", {
      params: query,
    });
    return response.data;
  },

  getSNSPostingDetail: async (
    query: SNSPostingDetailRequest
  ): Promise<ApiResponse<SNSPostingContent>> => {
    const response = await apiClient.get<ApiResponse<SNSPostingContent>>(`/posting/media`, {
      params: {
        snsType: query.snsType,
        mediaId: query.mediaId,
      },
    });
    return response.data;
  },
};

export default postingController;
