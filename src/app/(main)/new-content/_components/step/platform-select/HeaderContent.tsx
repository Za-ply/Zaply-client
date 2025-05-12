"use client";

import { HelpIcon } from "@/components";
import { useSheetStore } from "../../store";

const HeaderContent = () => {
  const { setIsOpen } = useSheetStore();

  return (
    <div className="space-y-[14px]">
      <p className="text-left text-black whitespace-pre-line text-t3">
        {`콘텐츠 내용을 작성할\n 메인 플랫폼을 선택해주세요.`}
      </p>
      <div className="flex items-center gap-1">
        <p className="text-b3M text-grayscale-700">
          선택한 플랫폼을 기준으로 내용을 작성하게 돼요.
        </p>
        <HelpIcon
          className="w-4 h-4 cursor-pointer text-grayscale-500"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
};

export default HeaderContent;
