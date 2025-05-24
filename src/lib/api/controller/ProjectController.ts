import { apiClient } from "../axios/instance";
import { ApiResponse, ProjectListResponse } from "../model";

const projectController = {
  getProjectList: async (): Promise<ApiResponse<ProjectListResponse>> => {
    const response = await apiClient.get<ApiResponse<ProjectListResponse>>("/project");
    return response.data;
  },
};

export default projectController;
