import { Fragment } from "react";
import { selectSheetStore } from "../store/select-sheet-store";
import { SheetOptions } from "@/constants/sheet-options";
import { Button } from "@/components";

const UploadReserve = () => {
  const store = selectSheetStore[SheetOptions.UPLOAD_LOCATION];
  const { setIsOpen } = store();

  return (
    <Fragment>
      <p className="mb-4 text-black text-t4">콘텐츠 변환 및 업로드 예약</p>
      <p className="mb-6 text-b2R text-grayscale-600">
        플랫폼별 정책과 무드에 알맞게 콘텐츠 내용을 변환해드려요.&nbsp;
        <span className="text-b2M text-grayscale-900">
          계정 연결이 된 플랫폼은 업로드 예약이 가능해요.
        </span>
        연결되지 않은 플랫폼은 내용 생성만 해드려요.
      </p>
      <Button variant="active" className="w-full" onClick={() => setIsOpen(false)}>
        확인
      </Button>
    </Fragment>
  );
};

export default UploadReserve;
