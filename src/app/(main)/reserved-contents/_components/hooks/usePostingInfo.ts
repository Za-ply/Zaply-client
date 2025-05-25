import { useQuery } from "@tanstack/react-query";
import postingService from "@/lib/api/service/PostingService";

export const usePostingInfo = (projectId: number) => {
  return useQuery({
    queryKey: ["postingInfo", projectId],
    queryFn: () => postingService.getPosting(projectId),
  });
};
