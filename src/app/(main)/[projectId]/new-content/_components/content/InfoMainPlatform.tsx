import { Button } from "@/components";
import { selectSheetStore } from "../store/select-sheet-store";
import { SheetOptions } from "@/constants/sheet-options";

const InfoMainPlatform = () => {
  const store = selectSheetStore[SheetOptions.MAIN_PLATFORM];
  const { setIsOpen } = store();

  return (
    <div onClick={e => e.stopPropagation()}>
      <p className="mb-4 text-black text-t4">기준 콘텐츠란?</p>
      <p className="mb-6 text-b2R text-grayscale-600">
        기준 콘텐츠는&nbsp;
        <span className="text-b2M text-grayscale-900">
          여러 플랫폼으로 발행할 콘텐츠의 기준이 되는 포맷
        </span>
        을 말해요. 이를 기준으로 다른 플랫폼에 맞추어 문구나 스타일이 자동으로 변환돼요.
      </p>
      <Button variant="active" className="w-full" onClick={() => setIsOpen(false)}>
        확인
      </Button>
    </div>
  );
};

export default InfoMainPlatform;
