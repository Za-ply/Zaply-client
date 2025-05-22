"use client";

import { HelpIcon } from "@/components";
import { useSheetStore } from "../../store";

const HeaderContent = () => {
  const { setIsOpen } = useSheetStore();

  return (
    <div className="space-y-[14px]">
      <p className="text-left text-black text-t3">어떤 콘텐츠를 기준으로 올릴까요?</p>
      <div className="flex items-center gap-1">
        <p className="text-b3M text-grayscale-700">메인 플랫폼</p>
        <HelpIcon
          className="w-4 h-4 cursor-pointer text-grayscale-500"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
};

export default HeaderContent;
