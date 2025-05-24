import projectController from "../controller/ProjectController";
import { ApiResponse, ProjectListResponse } from "../model";

const projectService = {
  getProjectList: async (): Promise<ApiResponse<ProjectListResponse>> => {
    try {
      const response = await projectController.getProjectList();
      return response;
    } catch (error) {
      console.error("Get project list failed:", error);
      throw new Error(error as string);
    }
  },
};

export default projectService;
