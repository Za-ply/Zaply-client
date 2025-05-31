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

  createProject: async (): Promise<ApiResponse<number>> => {
    try {
      const response = await projectController.createProject();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("프로젝트 생성 실패", { cause: error });
    }
  },
};

export default projectService;
