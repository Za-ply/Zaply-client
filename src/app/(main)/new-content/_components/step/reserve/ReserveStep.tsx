"use client";

import { Button, CheckIcon } from "@/components";
import { SelectUploadType } from "./SelectUploadType";
import { useRouter } from "next/navigation";
import { useReserveStore } from "../../store/reserve-store";

const ReserveStep = () => {
  const router = useRouter();
  const { isReserve } = useReserveStore();

  const handleComplete = () => {
    // 나중에 api 연결하고 로딩 상태일 때 ....
    router.push(`/loading?isReserve=${isReserve}`);

    setTimeout(() => {
      // 일단 로딩되는 거 보여주려고 넣었는데 여기로 넘어가도 모달이 계속 뜨고 잇어요....... 한 시간동안 하다가 일단 포기
      // 루트 레이아웃에서 모달 관리하는 거를 사용하는 폴더 레이아웃에서 모달을 관리하게 해야할지 고민스
      router.push("/upload?success=true");
    }, 3000);
  };

  return (
    <>
      <SelectUploadType />
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
        <Button
          className="w-full text-button1 text-grayscale-100"
          leftIcon={<CheckIcon />}
          onClick={handleComplete}>
          완료
        </Button>
      </div>
    </>
  );
};

export default ReserveStep;
