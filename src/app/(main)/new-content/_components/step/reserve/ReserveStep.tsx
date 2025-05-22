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
      router.replace("/upload?success=true");
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
