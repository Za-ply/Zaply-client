import { apiClient } from "../axios/instance";
import { ApiResponse, ProjectListResponse } from "../model";

const projectController = {
  getProjectList: async (): Promise<ApiResponse<ProjectListResponse>> => {
    const response = await apiClient.get<ApiResponse<ProjectListResponse>>("/project");
    return response.data;
  },

  createProject: async (): Promise<ApiResponse<number>> => {
    const response = await apiClient.post<ApiResponse<number>>("/project/create");
    return response.data;
  },
};

export default projectController;
