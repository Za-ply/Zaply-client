import { Button, ChevronIcon } from "@/components";
import Dropdown from "@/components/dropdown";
import { mockPostList } from "../mocks";
import ViewFiter from "../step/content-make/LoadContent/ViewFiter";
import ShowContentList from "../step/content-make/LoadContent/ShowContentList";
import NoContentList from "../step/content-make/LoadContent/NoContentList";
import { usePostStore } from "../store";
import ShowDetailList from "../step/content-make/LoadContent/ShowDetailList";
import PrevList from "../step/content-make/LoadContent/PrevList";

const LoadContentList = () => {
  const { selectPostList, isShowDetail } = usePostStore();

  return (
    <div className="relative">
      <div className="pl-5 mb-8" onClick={e => e.stopPropagation()}>
        {isShowDetail ? <PrevList /> : <Dropdown />}
      </div>

      <div className="border-t-[6px] border-grayscale-200" onClick={e => e.stopPropagation()}>
        {mockPostList.length !== 0 && <ViewFiter />}
        {mockPostList.length === 0 ? (
          <NoContentList />
        ) : isShowDetail ? (
          <ShowDetailList />
        ) : (
          <ShowContentList />
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-grayscale-100 to-transparent z-10 pointer-events-none" />

      <div className="max-w-[440px] border-t border-grayscale-200 mx-5 pt-2 fixed bottom-0 left-0 right-0 z-10 shadow-drop bg-grayscale-100">
        <Button
          variant={selectPostList ? "active" : "deactive"}
          className="w-full mx-auto mb-[60px]">
          불러오기
        </Button>
      </div>
    </div>
  );
};

export default LoadContentList;
