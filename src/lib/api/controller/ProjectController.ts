import { apiClient } from "../axios/instance";
import { ApiResponse } from "../model";

const projectController = {
  createProject: async (): Promise<ApiResponse<number>> => {
    const response = await apiClient.post<ApiResponse<number>>("/project/create");
    return response.data;
  },
};

export default projectController;
