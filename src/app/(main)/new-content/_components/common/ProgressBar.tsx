"use client";

import { ArrowIcon } from "@/components";
import { cn } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";

const ProgressBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  const handlePreviousStep = (currentStep: string) => {
    router.push(`/new-content?step=${Number(currentStep) - 1}`);
  };

  const handleClose = (currentStep: string) => {
    router.push(`/warning?step=${currentStep}`);
  };

  return (
    <div className="flex justify-center items-center py-[18px] px-5 fixed top-0 left-0 right-0 z-50 bg-white max-w-[440px] mx-auto h-[60px]">
      <div
        className={cn("flex items-center w-full gap-2", {
          "justify-between": step !== "1",
          "justify-end": step === "1",
        })}>
        {step !== "1" && (
          <ArrowIcon
            type="left"
            className="text0-[#292D32]"
            onClick={() => handlePreviousStep(step as string)}
          />
        )}
        <button
          type="button"
          className="text-button2 text-grayscale-600"
          onClick={() => handleClose(step as string)}>
          닫기
        </button>
      </div>
      <div className="w-full h-1 absolute left-0 bottom-0 flex gap-[2px]">
        <div
          className={`w-1/4 h-full  ${Number(step) === 1 ? "bg-blue-700" : "bg-grayscale-300"}`}
        />
        <div
          className={`w-1/4 h-full  ${Number(step) === 2 ? "bg-blue-700" : "bg-grayscale-300"}`}
        />
        <div
          className={`w-1/4 h-full  ${Number(step) === 3 ? "bg-blue-700" : "bg-grayscale-300"}`}
        />
        <div
          className={`w-1/4 h-full  ${Number(step) === 4 ? "bg-blue-700" : "bg-grayscale-300"}`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
