"use client";

import { CheckIcon } from "@/components";
import ScheduleSelector from "./ScheduleSelector";
import { useReserveStore } from "../../store/reserve-store";

export const SelectUploadType = () => {
  const { isReserve, setIsReserve } = useReserveStore();
  const showSchedule = isReserve;

  const handleSelect = (isReserve: boolean) => {
    setIsReserve(isReserve);
  };

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
            { key: false, label: "지금 바로 업로드하기" },
            { key: true, label: "업로드 예약하기" },
          ].map(option => {
            const isSelected = isReserve === option.key;
            return (
              <div
                key={option.label}
                onClick={() => handleSelect(option.key)}
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
          showSchedule ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}>
        <ScheduleSelector />
      </div>
    </>
  );
};

export default SelectUploadType;
