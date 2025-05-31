import { apiClient } from "../axios/instance";
import { ApiResponse } from "../model";
import {
  CreatePostingRequest,
  Posting,
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

  // 페이스북 포스팅
  createFacebookSinglePosting: async (projectId: number, data: CreatePostingRequest) => {
    const response = await apiClient.post(`/posting/facebook/${projectId}/single`, data);
    return response.data;
  },

  createFacebookCarouselPosting: async (projectId: number, data: CreatePostingRequest) => {
    const response = await apiClient.post(`/posting/facebook/${projectId}/carousel`, data);
    return response.data;
  },

  // 스레드 포스팅
  createThreadSinglePosting: async (projectId: number, data: CreatePostingRequest) => {
    const response = await apiClient.post(`/posting/threads/${projectId}/single`, data);
    return response.data;
  },

  createThreadCarouselPosting: async (projectId: number, data: CreatePostingRequest) => {
    const response = await apiClient.post(`/posting/threads/${projectId}/carousel`, data);
    return response.data;
  },

  // 인스타 포스팅
  createInstagramCarouselPosting: async (projectId: number, data: CreatePostingRequest) => {
    const response = await apiClient.post(`/posting/instagram/${projectId}/carousel`, data);
    return response.data;
  },
};

export default postingController;
