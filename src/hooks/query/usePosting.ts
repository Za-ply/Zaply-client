import { QueryKeys } from "@/constants/query-keys";
import { SNSPostingDetailRequest, SNSPostingListRequest } from "@/lib/api/model/posting";
import postService from "@/lib/api/service/PostService";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const useGetSNSPostingList = ({
  query,
  enabled,
}: {
  query: SNSPostingListRequest;
  enabled: boolean;
}) => {
  return useInfiniteQuery({
    queryKey: [QueryKeys.POSTING, query.cursor, query.size, query.snsType],
    queryFn: ({ pageParam }: { pageParam: string | undefined }) =>
      postService.getSNSPostingList({
        ...query,
        cursor: pageParam,
      }),
    initialPageParam: undefined,
    getNextPageParam: lastPage => {
      if (!lastPage.data || !lastPage.data.hasNext) return undefined;
      return lastPage.data.nextCursor;
    },
    enabled,
  });
};

const useGetSNSPostingDetail = ({
  query,
  enabled,
}: {
  query: SNSPostingDetailRequest;
  enabled: boolean;
}) => {
  return useQuery({
    queryKey: [QueryKeys.POSTING_DETAIL, query.mediaId],
    queryFn: () => postService.getSNSPostingDetail(query),
    enabled,
  });
};

export { useGetSNSPostingList, useGetSNSPostingDetail };
