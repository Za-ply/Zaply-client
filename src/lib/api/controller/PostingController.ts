import { apiClient } from "../axios/instance";
import { ApiResponse } from "../model";
import {
  SNSPostingContent,
  SNSPostingDetailRequest,
  SNSPostingListRequest,
  SNSPostingResponse,
  TransferSNSPostingRequest,
  TransferSNSPostingResponse,
} from "../model/posting";

const postingController = {
  setAuthToken: (accessToken: string) => {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  },

  clearAuthToken: () => {
    apiClient.defaults.headers.common["Authorization"] = "";
  },

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

  transferSNSPosting: async (
    query: TransferSNSPostingRequest
  ): Promise<ApiResponse<TransferSNSPostingResponse>> => {
    const response = await apiClient.post<ApiResponse<TransferSNSPostingResponse>>(
      `/posting/transfer`,
      query
    );
    return response.data;
  },

  recommendContentTitle: async (query: TransferSNSPostingRequest): Promise<ApiResponse<string>> => {
    const response = await apiClient.post<ApiResponse<string>>(`/posting/title`, query);
    return response.data;
  },
};

export default postingController;
