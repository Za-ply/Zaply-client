import Bedge from "./Bedge";
import UploadFile from "./Upload/UploadFile";
import UploadLocation from "./Upload/UploadLocation";
import LoadContent from "./LoadContent/LoadContent";
import CreatePost from "./CreatePost";
import WritePost from "./WritePost/WritePost";

// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import { QueryKeys } from "@/constants/query-keys";
// import postService from "@/lib/api/service/PostService";
// import { cookies } from "next/headers";

const ContentMakeStep = async () => {
  // const queryClient = new QueryClient();
  // const cookieStore = await cookies();

  // const accessToken = cookieStore.get("accessToken")?.value;

  // try {
  //   await queryClient.prefetchInfiniteQuery({
  //     queryKey: [QueryKeys.POSTING, undefined, 12, "THREADS"],
  //     queryFn: ({ pageParam }) =>
  //       postService.getSNSPostingList(
  //         {
  //           size: 12,
  //           snsType: "THREADS",
  //           cursor: pageParam,
  //         },
  //         accessToken
  //       ),
  //     initialPageParam: undefined,
  //     getNextPageParam: (lastPage: any) => {
  //       return lastPage.data?.nextCursor ?? undefined;
  //     },
  //   });
  // } catch (error) {
  //   console.error("Prefetch failed:", error);
  // }

  return (
    <div className="flex flex-col justify-between h-full pt-10">
      <div>
        <Bedge />
        <div className="flex items-center justify-between w-full cursor-default">
          <p className="text-black text-t3 mt-[14px] mb-6">내용을 입력해주세요.</p>
          {/* 계정에서 콘텐츠 내용 불러오기*/}
          {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
          <LoadContent />
          {/* </HydrationBoundary> */}
        </div>
        <div className="flex flex-col gap-3">
          {/* 내용 작성 영역 */}
          <WritePost />

          {/* 사진 혹은 파일 업로드 영역 */}
          <UploadFile />

          <span className="w-full border-t my-9 border-grayscale-300" />

          {/* 업로드 위치 선택 영역 */}
          <UploadLocation />
        </div>
      </div>
      <CreatePost />
    </div>
  );
};

export default ContentMakeStep;
