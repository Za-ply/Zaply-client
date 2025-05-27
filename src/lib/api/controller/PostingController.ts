import { apiClient } from "../axios/instance";
import { ApiResponse, Posting } from "../model";

const postingController = {
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
