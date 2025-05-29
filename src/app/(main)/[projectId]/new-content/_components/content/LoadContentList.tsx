import { Button, Progress } from "@/components";
import Dropdown from "@/components/dropdown";
import ViewFiter from "../step/content-make/LoadContent/ViewFiter";
import ShowContentList from "../step/content-make/LoadContent/ShowContentList";
import NoContentList from "../step/content-make/LoadContent/NoContentList";
import { usePlatformStore, usePostStore } from "../store";
import ShowDetailList from "../step/content-make/LoadContent/ShowDetailList";
import PrevList from "../step/content-make/LoadContent/PrevList";
import useLoadContent from "../hooks/useLoadContent";
import { useGetSNSPostingList } from "@/hooks/query/usePosting";
import { useContentMakeStore } from "../store/content-make-store";
import useFilePreviewStore from "../store/preview-store";
import { policyConfig } from "../config/constraint-config";
import { toast } from "@/utils/useToast";
import { useProgress } from "../hooks/useProgress";

const LoadContentList = () => {
  const { selectPostList, isShowDetail } = usePostStore();
  const { isOpen, selectedOption, setIsOpen, setSelectedOption } = useLoadContent();
  const { setContent, setFiles } = useContentMakeStore();
  const { setFiles: setFilePreview } = useFilePreviewStore();
  const { selectedPlatform } = usePlatformStore();

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetSNSPostingList({
    enabled: isOpen,
    query: {
      size: 12,
      snsType:
        selectedOption === "Instagram"
          ? "INSTAGRAM"
          : selectedOption === "Facebook"
            ? "FACEBOOK"
            : "THREADS",
    },
  });

  const progress = useProgress({ isLoading });

  const handleLoadContent = () => {
    if (selectPostList) {
      setContent(selectPostList.postingContent);

      setFilePreview(
        selectPostList.postingImages
          .slice(0, policyConfig[selectedPlatform!].maxImageCount)
          .map(image => ({
            file: new File([image], image, {
              type: "image/jpeg",
            }),
            previewUrl: image,
          }))
      );
      setFiles(
        selectPostList.postingImages.map(image => new File([image], image, { type: "image/jpeg" }))
      );

      if (selectPostList.postingImages.length > policyConfig[selectedPlatform!].maxImageCount) {
        toast({
          variant: "error",
          description: `${selectedPlatform} 최대 업로드 가능한 이미지 개수를 초과하여 자동으로 제외하였습니다.`,
        });
      }

      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <div className="pl-5 mb-8" onClick={e => e.stopPropagation()}>
        {isShowDetail ? (
          <PrevList />
        ) : (
          <Dropdown onSelect={setSelectedOption} selectedOption={selectedOption} />
        )}
      </div>

      {isLoading && <Progress value={progress} className="w-full mx-auto top-6" />}

      <div
        className="relative border-t-[6px] border-grayscale-200"
        onClick={e => e.stopPropagation()}>
        {data && data?.pages[0].data !== null && <ViewFiter data={data?.pages[0].data} />}
        {data && data.pages[0].data === null ? (
          <NoContentList />
        ) : isShowDetail ? (
          <ShowDetailList selectedOption={selectedOption} />
        ) : (
          <ShowContentList
            isLoading={isLoading}
            data={data?.pages}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-grayscale-100 to-transparent z-10 pointer-events-none" />

      <div className="max-w-[440px] border-t border-grayscale-200 mx-5 pt-2 fixed bottom-0 left-0 right-0 z-10 shadow-drop bg-grayscale-100">
        <Button
          variant={selectPostList ? "active" : "deactive"}
          className="w-full mx-auto mb-[60px]"
          onClick={handleLoadContent}>
          불러오기
        </Button>
      </div>
    </div>
  );
};

export default LoadContentList;
