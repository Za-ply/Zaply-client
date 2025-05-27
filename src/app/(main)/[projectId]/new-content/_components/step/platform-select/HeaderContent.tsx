"use client";

import { HelpIcon } from "@/components";

import { selectSheetStore } from "../../store/select-sheet-store";
import { SheetOptions } from "@/constants/sheet-options";

const HeaderContent = () => {
  const store = selectSheetStore[SheetOptions.MAIN_PLATFORM];
  const { setIsOpen } = store();

  return (
    <div className="space-y-[14px]">
      <p className="text-left text-black text-t3">어떤 콘텐츠를 기준으로 생성할까요?</p>
      <div className="flex items-center gap-1">
        <p className="text-b3M text-grayscale-700">기준 콘텐츠</p>
        <HelpIcon
          className="w-5 h-5 cursor-pointer text-grayscale-500"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
};

export default HeaderContent;
