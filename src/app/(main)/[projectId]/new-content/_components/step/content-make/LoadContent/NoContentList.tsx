import { ErrorIcon } from "@/components";

const NoContentList = () => {
  return (
    <div className="h-[528px] flex flex-col items-center justify-start pt-[84px] mb-[56px] gap-[6px]">
      <ErrorIcon width={48} height={48} className="text-blue-700 mb-[6px]" />
      <p className="text-blue-700 text-t4">게시된 콘텐츠가 없습니다.</p>
      <p className="text-grayscale-600 text-b4M">
        불러오기를 하려면 계정에 게시된 콘텐츠가 필요해요.
      </p>
    </div>
  );
};

export default NoContentList;
