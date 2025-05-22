import { Fragment } from "react";
import { useSheetStore } from "../store/sheet-store";
import { Button } from "@/components";

const InfoMainPlatform = () => {
  const { setIsOpen } = useSheetStore();

  return (
    <Fragment>
      <p className="mb-4 text-black text-t4">메인 플랫폼이란?</p>
      <p className="mb-6 text-b2R text-grayscale-600">
        메인 플랫폼은&nbsp;
        <span className="text-b2M text-grayscale-800">
          내가 작성할 콘텐츠의 기준이 되는 대표 SNS 플랫폼
        </span>
        을 말해요. 이를 기준으로 문구나 스타일이 자동으로 다른 플랫폼에 맞게 특화되어 변환될 거예요.
      </p>
      <Button variant="active" className="w-full" onClick={() => setIsOpen(false)}>
        확인
      </Button>
    </Fragment>
  );
};

export default InfoMainPlatform;
