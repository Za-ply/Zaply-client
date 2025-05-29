import { apiClient } from "../axios/instance";
import { ApiResponse, getPresignedUrlResponse } from "../model";

const imageController = {
  getPresignedUrl: async ({ projectId, fileName }: { projectId: number; fileName: string }) => {
    const response = await apiClient.get<getPresignedUrlResponse>(`/image/presigned-url`, {
      params: {
        prefix: projectId,
        fileName: fileName,
      },
    });
    return response.data;
  },
};

export default imageController;
