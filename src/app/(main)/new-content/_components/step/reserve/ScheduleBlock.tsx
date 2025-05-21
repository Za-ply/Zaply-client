"use client";

import { useEffect } from "react";
import { useSheetStore } from "../../store";
import { useReserveStore } from "../../store/reserve-store";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";

interface ScheduleBlockProps {
  platform?: SocialPlatform;
  isLinked?: boolean;
}

export const ScheduleBlock = ({ platform, isLinked = false }: ScheduleBlockProps) => {
  const { selectedDate, selectedTime, isAll, setPlatformReserve } = useReserveStore();
  const { setIsOpen } = useSheetStore();

  useEffect(() => {
    if (selectedDate && selectedTime && isAll) {
      setPlatformReserve(platform as SocialPlatform, {
        date: selectedDate,
        time: selectedTime,
      });
    }
  }, [selectedDate, selectedTime, isAll, platform, setPlatformReserve]);

  const formattedDate = format(selectedDate || new Date(), "yy/MM/dd(EEE)", { locale: ko });
  const formattedTime = selectedTime
    ? selectedTime.replace("AM", "오전").replace("PM", "오후")
    : format(new Date(), "a hh:mm", { locale: ko }).replace("am", "오전").replace("pm", "오후");

  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-[116px] px-4 py-2 border border-grayscale-300 rounded-[8px] text-b3M text-center cursor-pointer ${
          !isAll && !isLinked
            ? "bg-grayscale-300 text-grayscale-500"
            : selectedDate
              ? "bg-grayscale-100 text-blue-blueblack"
              : "bg-grayscale-100 text-grayscale-500"
        }`}
        onClick={() => setIsOpen(true)}>
        {formattedDate}
      </div>
      <div
        className={`w-[116px] px-4 py-2 border border-grayscale-300 rounded-[8px] text-b3M text-center cursor-pointer ${
          !isAll && !isLinked
            ? "bg-grayscale-300 text-grayscale-500"
            : selectedTime
              ? "bg-grayscale-100 text-blue-blueblack"
              : "bg-grayscale-100 text-grayscale-500"
        }`}
        onClick={() => setIsOpen(true)}>
        {formattedTime}
      </div>
    </div>
  );
};

export default ScheduleBlock;
