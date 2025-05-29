import { apiClient } from "../axios/instance";
import { ApiResponse } from "../model";
import {
  Posting,
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

  getPosting: async (projectId: number) => {
    const response = await apiClient.get(`/posting/${projectId}`);
    return response.data;
  },

  updateSinglePosting: async (
    postingId: number,
    snsType: string,
    data: Partial<Posting>
  ): Promise<ApiResponse<Posting>> => {
    const response = await apiClient.put(`/posting/${postingId}/single/reschedule`, data, {
      params: {
        snsType,
      },
    });
    return response.data;
  },

  updateCarouselPosting: async (
    postingId: number,
    snsType: string,
    data: Partial<Posting>
  ): Promise<ApiResponse<Posting>> => {
    const response = await apiClient.put(`/posting/${postingId}/carousel/reschedule`, data, {
      params: {
        snsType,
      },
    });
    return response.data;
  },
};

export default postingController;
