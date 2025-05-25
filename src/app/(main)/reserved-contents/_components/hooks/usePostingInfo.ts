import { useQuery } from "@tanstack/react-query";
import postingService from "@/lib/api/service/PostingService";

export const POSTING_INFO_QUERY_KEY = ["postingInfo"] as const;

export const usePostingInfo = (projectId: number) => {
  return useQuery({
    queryKey: [POSTING_INFO_QUERY_KEY, projectId],
    queryFn: () => postingService.getPosting(projectId),
  });
};
