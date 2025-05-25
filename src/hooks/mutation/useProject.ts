import { useMutation } from "@tanstack/react-query";
import projectService from "@/lib/api/service/ProjectService";

const useCreateProject = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await projectService.createProject();
      return response;
    },
  });
};

export { useCreateProject };
