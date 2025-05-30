import { Fragment } from "react";
import PostCard from "./PostCard";
import { usePostStore } from "../../../store";
import { SNSPostingResponse } from "@/lib/api/model/posting";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { Spinner } from "@/components/common/spinner";
import { ApiResponse } from "@/lib/api/model";
import { EllipseIcon } from "@/components";

type ShowContentListProps = {
  isLoading: boolean;
  data: ApiResponse<SNSPostingResponse | null>[] | undefined;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
};

const ShowContentList = ({
  isLoading,
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: ShowContentListProps) => {
  const { selectPostList, viewType, setSelectPostList } = usePostStore();

  const { loadMoreRef } = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  if (isLoading) {
    return (
      <div className="h-[528px] px-5 flex flex-col items-center justify-start gap-8 mt-[56px]">
        <p className="text-t4 text-grayscale-600 text-center">
          SNS 게시물을 처음 불러오는 경우
          <br />
          시간이 소요돼요
        </p>
        <div className="flex items-center justify-center gap-2">
          <EllipseIcon className="w-2 h-2 animate-[bounce_1s_infinite_0ms,colorChange_1s_infinite_0ms]" />
          <EllipseIcon className="w-2 h-2 animate-[bounce_1s_infinite_300ms,colorChange_1s_infinite_300ms]" />
          <EllipseIcon className="w-2 h-2 animate-[bounce_1s_infinite_600ms,colorChange_1s_infinite_600ms]" />
          <EllipseIcon className="w-2 h-2 animate-[bounce_1s_infinite_900ms,colorChange_1s_infinite_900ms]" />
        </div>
        {/* {viewType === "vertical" ? (
          <div className="flex flex-col gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <PostCard.Skeleton key={index} viewType={viewType} />
            ))}
          </div>
        ) : (
          <div className="grid items-center justify-center w-full grid-cols-3 gap-[6px]">
            {Array.from({ length: 12 }).map((_, index) => (
              <PostCard.Skeleton key={index} viewType={viewType} />
            ))}
          </div>
        )} */}
      </div>
    );
  }

  return (
    <Fragment>
      <div
        className={`h-[528px] pb-[88px] overflow-y-auto scrollbar-thin scrollbar-thumb-grayscale-400 scrollbar-track-transparent ${viewType === "vertical" ? "pr-[11px]" : "px-5"}`}>
        {viewType === "vertical" ? (
          data?.map((pages, pageIndex) => (
            <Fragment key={pageIndex}>
              {pages.data &&
                pages.data.content.map(post => (
                  <PostCard
                    key={post.postingId}
                    post={post}
                    isSelected={selectPostList?.postingId === post.postingId}
                    onSelect={setSelectPostList}
                    viewType={viewType}
                  />
                ))}
            </Fragment>
          ))
        ) : (
          <div className="grid items-center justify-center w-full grid-cols-3 gap-[6px]">
            {data?.map((pages, pageIndex) => (
              <Fragment key={pageIndex}>
                {pages.data &&
                  pages.data.content.map(post => (
                    <PostCard
                      key={post.postingId}
                      post={post}
                      isSelected={selectPostList?.postingId === post.postingId}
                      onSelect={setSelectPostList}
                      viewType={viewType}
                    />
                  ))}
              </Fragment>
            ))}
          </div>
        )}

        <div ref={loadMoreRef} className="h-4 col-span-full" />
        {isFetchingNextPage && (
          <div className="flex items-center justify-center w-full text-center col-span-full">
            <Spinner />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ShowContentList;
