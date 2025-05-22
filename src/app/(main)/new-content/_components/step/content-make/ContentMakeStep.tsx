import { Button } from "@/components";
import Bedge from "./Bedge";
import UploadFile from "./Upload/UploadFile";
import UploadLocation from "./Upload/UploadLocation";
import WriteContent from "./WriteContent";

import LoadContent from "./LoadContent/LoadContent";
const ContentMakeStep = () => {
  return (
    <div className="flex flex-col justify-between h-full pt-10 overflow-y-auto scrollbar-hide">
      <div>
        <Bedge />
        <p className="text-black text-t3 mt-[14px] mb-6">메인 콘텐츠 내용을 입력해주세요.</p>
        <div className="flex flex-col gap-5">
          {/* 사진 혹은 파일 업로드 영역ㄴ */}
          <UploadFile />

          {/* 내용 작성 영역 */}
          <WriteContent />

          {/* 계정에서 콘텐츠 내용 불러오기*/}
          <LoadContent />

          <span className="w-full my-3 border-t border-grayscale-300" />

          {/* 업로드 위치 선택 영역 */}
          <UploadLocation />
        </div>
      </div>

      <div className="max-w-[440px] border-t border-grayscale-200 mx-auto pt-2 fixed bottom-0 left-0 right-0 z-10 shadow-drop bg-grayscale-100">
        <Button variant="active" className="w-[350px] mx-auto mb-[60px]">
          다음
        </Button>
      </div>
    </div>
  );
};

export default ContentMakeStep;
