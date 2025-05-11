import { Bedge } from "../content-make";

const ContentMakeStep = () => {
  return (
    <div className="">
      <Bedge />
      <div className="flex flex-col gap-2 mt-[14px] mb-6">
        <p className="text-black text-t3">메인 콘텐츠 내용을 입력해주세요.</p>
      </div>
    </div>
  );
};

export default ContentMakeStep;
