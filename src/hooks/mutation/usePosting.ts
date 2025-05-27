import { useMutation } from "@tanstack/react-query";
import postService from "@/lib/api/service/PostService";
import { TransferSNSPostingRequest } from "@/lib/api/model/posting";

const useTransferSNSPosting = () => {
  return useMutation({
    mutationFn: async (query: TransferSNSPostingRequest) => {
      const response = await postService.transferSNSPosting(query);
      return response;
    },
  });
};

const useRecommendContentTitle = () => {
  return useMutation({
    mutationFn: async (query: TransferSNSPostingRequest) => {
      const response = await postService.recommendContentTitle(query);
      return response;
    },
  });
};

export { useTransferSNSPosting, useRecommendContentTitle };
