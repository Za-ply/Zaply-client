import { CircleCheckBoldIcon, CircleIcon, ViewGalleryIcon, ViewVerticalIcon } from "@/components";
import { usePostStore } from "../../../store";
import { useRouter, useSearchParams } from "next/navigation";
import { mockPostList } from "../../../mocks";

const ViewFiter = () => {
  const {
    selectPostList,
    viewType,
    isShowDetail,
    setSelectPostList,
    setViewType,
    setIsShowDetail,
  } = usePostStore();

  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("postId");

  return (
    <div className={`flex items-center ${isShowDetail ? "justify-end" : "justify-between"}`}>
      {isShowDetail ? (
        <div className="flex items-center justify-center h-[56px] py-4 px-5">
          {selectPostList?.id === Number(postId) ? (
            <CircleCheckBoldIcon
              className="text-blue-700"
              onClick={e => {
                e.stopPropagation();
                setSelectPostList(null);
              }}
            />
          ) : (
            <CircleIcon
              className="text-grayscale-400"
              onClick={e => {
                e.stopPropagation();
                setSelectPostList(mockPostList[Number(postId) - 1]);
              }}
            />
          )}
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3 px-5 py-4">
            <ViewVerticalIcon
              className={`text-grayscale-400 ${viewType === "vertical" ? "text-grayscale-800" : ""}`}
              onClick={e => {
                e.stopPropagation();
                setViewType("vertical");
              }}
            />
            <ViewGalleryIcon
              className={`text-grayscale-400 ${viewType === "gallery" ? "text-grayscale-800" : ""}`}
              onClick={e => {
                e.stopPropagation();
                setViewType("gallery");
              }}
            />
          </div>
          {selectPostList && (
            <div className="px-5">
              <button
                type="button"
                className="py-[6px] px-[10px] rounded-[50px] bg-blue-300 text-blue-700 text-b4M"
                onClick={e => {
                  e.stopPropagation();
                  setIsShowDetail(true);
                  router.push(`/new-content?step=2&postId=${selectPostList.id}`);
                }}>
                자세히 보기
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ViewFiter;
