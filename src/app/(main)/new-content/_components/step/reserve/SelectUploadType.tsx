"use client";

import { useState, useEffect } from "react";
import { CheckIcon } from "@/components";
import { useUploadScheduleStore } from "@/app/(main)/new-content/_components/store/showScheduler";
import ScheduleSelector from "./ScheduleSelector";

export const SelectUploadType = () => {
  const [selected, setSelected] = useState<"now" | "reserve" | null>(null);
  const { isVisible, show, hide } = useUploadScheduleStore();

  useEffect(() => {
    if (selected === "reserve") {
      show();
    } else {
      hide();
    }
  }, [selected, show, hide]);

  return (
    <>
      <div className="w-full flex flex-col gap-10 mt-10">
        <p className="text-t3 text-grayscale-900">
          준비된 컨텐츠를
          <br />
          언제 업로드 할까요?
        </p>

        <div className="w-full flex flex-col gap-3">
          {[
            { key: "now", label: "지금 바로 업로드하기" },
            { key: "reserve", label: "업로드 예약하기" },
          ].map(option => {
            const isSelected = selected === option.key;
            return (
              <div
                key={option.key}
                onClick={() => setSelected(option.key as "now" | "reserve")}
                className={`flex items-center justify-between px-5 py-4 border rounded-[12px] cursor-pointer transition-all duration-300 transform ${
                  isSelected ? "bg-blue-100 border-blue-100" : "border-grayscale-300"
                }`}>
                <p
                  className={`text-button2 transition-colors duration-300 ${
                    isSelected ? "text-blue-700" : "text-grayscale-800"
                  }`}>
                  {option.label}
                </p>
                <CheckIcon
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isSelected ? "text-blue-700" : "text-grayscale-500"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isVisible ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}>
        <ScheduleSelector />
      </div>
    </>
  );
};

export default SelectUploadType;
