import Bedge from "./Bedge";
import UploadFile from "./Upload/UploadFile";
import UploadLocation from "./Upload/UploadLocation";
import WriteContent from "./WriteContent";
import LoadContent from "./LoadContent/LoadContent";
import CreatePost from "./CreatePost";

const ContentMakeStep = () => {
  return (
    <div className="flex flex-col justify-between h-full pt-10 overflow-y-auto scrollbar-hide">
      <div>
        <Bedge />
        <div className="flex items-center justify-between w-full">
          <p className="text-black text-t3 mt-[14px] mb-6">내용을 입력해주세요.</p>
          {/* 계정에서 콘텐츠 내용 불러오기*/}
          <LoadContent />
        </div>
        <div className="flex flex-col gap-3">
          {/* 내용 작성 영역 */}
          <WriteContent type="upload" />

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
