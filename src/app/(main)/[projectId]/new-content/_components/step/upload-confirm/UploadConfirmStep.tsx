import ContentTitle from "./ContentTitle";
import PlatformSelect from "./PlatformSelect";
import ConfirmButton from "./ConfirmButton";
import EditFile from "./EditFile";

const UploadConfirmStep = () => {
  return (
    <div className="flex flex-col justify-between h-full pt-10 pb-12 overflow-y-auto scrollbar-hide">
      {/* 콘텐츠 제목 영역 */}
      <ContentTitle />
      <span className="w-full h-[1px] bg-grayscale-300 my-6" />

      {/* 플랫폼 별 콘텐츠 내용 확인 영역 */}
      <PlatformSelect />

      {/* 파일 수정 영역 */}
      <EditFile />

      {/* 확인 버튼 영역 */}
      <ConfirmButton />
    </div>
  );
};

export default UploadConfirmStep;
