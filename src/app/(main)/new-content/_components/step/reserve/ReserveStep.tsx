"use client";

import { Button, CheckIcon } from "@/components";
import { SelectUploadType } from "./SelectUploadType";
import { useRouter } from "next/navigation";
import { useReserveStore } from "../../store/reserve-store";
import { useState } from "react";
import LoadingModal from "./LoadingModal";

const ReserveStep = () => {
  const router = useRouter();
  const { isReserve, clearReserve } = useReserveStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = () => {
    // 나중에 api 연결하고 로딩 상태일 때 ....
    clearReserve();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
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

      <LoadingModal isOpen={isLoading} isReserve={isReserve ?? false} />
    </>
  );
};

export default ReserveStep;
