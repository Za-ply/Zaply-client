import { useQuery } from "@tanstack/react-query";
import { ProjectListResponse } from "@/lib/api/model/project";
import projectService from "@/lib/api/service/ProjectService";
import { ApiResponse } from "@/lib/api/model/response";

export const useProjects = () => {
  return useQuery<ApiResponse<ProjectListResponse>>({
    queryKey: ["projectList"],
    queryFn: projectService.getProjectList,
  });
};
