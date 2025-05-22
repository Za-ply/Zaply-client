"use client";

import { Button, CheckIcon } from "@/components";
import { SelectUploadType } from "./SelectUploadType";
import { useRouter } from "next/navigation";

const ReserveStep = () => {
  const router = useRouter();

  const handleComplete = () => {
    // /loading?modal=true로 push (병렬라우팅)
    router.push("/loading?modal=true");

    setTimeout(() => {
      // 모달 닫기 (뒤로가기)
      router.back();
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
