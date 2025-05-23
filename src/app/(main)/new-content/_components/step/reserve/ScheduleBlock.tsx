"use client";

import { useEffect } from "react";
import { useReserveStore } from "../../store/reserve-store";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { selectSheetStore } from "../../store/select-sheet-store";
import { SheetOptions } from "@/constants/sheet-options";

interface ScheduleBlockProps {
  platform?: SocialPlatform;
  isLinked?: boolean;
}

export const ScheduleBlock = ({ platform, isLinked = false }: ScheduleBlockProps) => {
  const { selectedDate, selectedTime, isAll, setPlatformReserve, setCurrentPlatform } =
    useReserveStore();
  const store = selectSheetStore[SheetOptions.CALENDAR];
  const { setIsOpen } = store();

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

  const handleClick = () => {
    if (platform) {
      setCurrentPlatform(platform);
    }
    setIsOpen(true);
  };

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
        onClick={handleClick}>
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
        onClick={handleClick}>
        {formattedTime}
      </div>
    </div>
  );
};

export default ScheduleBlock;
