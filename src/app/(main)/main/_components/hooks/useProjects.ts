import { useQuery } from "@tanstack/react-query";
import { ProjectListResponse } from "@/lib/api/model/project";
import projectService from "@/lib/api/service/ProjectService";
import { ApiResponse } from "@/lib/api/model/response";

export const PROJECTS_QUERY_KEY = ["projectList"] as const;

export const useProjects = () => {
  return useQuery<ApiResponse<ProjectListResponse>>({
    queryKey: PROJECTS_QUERY_KEY,
    queryFn: projectService.getProjectList,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    staleTime: 0,
    gcTime: 0,
  });
};
