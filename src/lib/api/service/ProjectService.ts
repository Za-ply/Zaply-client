import projectController from "../controller/ProjectController";
import { ApiResponse } from "../model";

const projectService = {
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
