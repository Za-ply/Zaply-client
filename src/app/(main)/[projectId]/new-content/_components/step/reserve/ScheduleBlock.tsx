"use client";

import { memo, useMemo } from "react";
import { useReserveStore } from "../../store/reserve-store";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { selectSheetStore } from "../../store/select-sheet-store";
import { SheetOptions } from "@/constants/sheet-options";

interface ScheduleBlockProps {
  platform?: SocialPlatform;
  isLinked?: boolean;
  selectedDate?: string | null;
  selectedTime?: string | null;
  onClick?: () => void;
}

const ScheduleBlock = memo(
  ({
    platform,
    isLinked = false,
    selectedDate: propSelectedDate,
    selectedTime: propSelectedTime,
    onClick,
  }: ScheduleBlockProps) => {
    const {
      isAll,
      platformReserves,
      setCurrentPlatform,
      selectedDate: storeSelectedDate,
      selectedTime: storeSelectedTime,
    } = useReserveStore();
    const store = selectSheetStore[SheetOptions.CALENDAR];
    const { setIsOpen } = store();

    const platformReserve = platform ? platformReserves[platform] : null;

    const { formattedDate, formattedTime } = useMemo(() => {
      const date = isAll
        ? format(propSelectedDate || storeSelectedDate || new Date(), "yy/MM/dd(EEE)", {
            locale: ko,
          })
        : format(platformReserve?.date || new Date(), "yy/MM/dd(EEE)", { locale: ko });

      const time = isAll
        ? propSelectedTime || storeSelectedTime
          ? (propSelectedTime || storeSelectedTime)?.replace("AM", "오전").replace("PM", "오후")
          : format(new Date(), "a hh:mm", { locale: ko })
              .replace("am", "오전")
              .replace("pm", "오후")
        : platformReserve?.time
          ? platformReserve.time.replace("AM", "오전").replace("PM", "오후")
          : format(new Date(), "a hh:mm", { locale: ko })
              .replace("am", "오전")
              .replace("pm", "오후");

      return { formattedDate: date, formattedTime: time };
    }, [
      isAll,
      propSelectedDate,
      storeSelectedDate,
      propSelectedTime,
      storeSelectedTime,
      platformReserve,
    ]);

    const handleClick = () => {
      if (platform) {
        setCurrentPlatform(platform);
      }
      if (onClick) {
        onClick();
      } else {
        setIsOpen(true);
      }
    };

    const dateClassName = useMemo(() => {
      return `w-[116px] px-4 py-2 border border-grayscale-300 rounded-[8px] text-b3M text-center cursor-pointer ${
        !isAll && !isLinked
          ? "bg-grayscale-300 text-grayscale-500"
          : propSelectedDate || (isAll ? storeSelectedDate : platformReserve?.date)
            ? "bg-grayscale-100 text-blue-blueblack"
            : "bg-grayscale-100 text-grayscale-500"
      }`;
    }, [isAll, isLinked, propSelectedDate, storeSelectedDate, platformReserve?.date]);

    const timeClassName = useMemo(() => {
      return `w-[116px] px-4 py-2 border border-grayscale-300 rounded-[8px] text-b3M text-center cursor-pointer ${
        !isAll && !isLinked
          ? "bg-grayscale-300 text-grayscale-500"
          : propSelectedTime || (isAll ? storeSelectedTime : platformReserve?.time)
            ? "bg-grayscale-100 text-blue-blueblack"
            : "bg-grayscale-100 text-grayscale-500"
      }`;
    }, [isAll, isLinked, propSelectedTime, storeSelectedTime, platformReserve?.time]);

    return (
      <div className="flex items-center gap-2">
        <div className={dateClassName} onClick={handleClick}>
          {formattedDate}
        </div>
        <div className={timeClassName} onClick={handleClick}>
          {formattedTime}
        </div>
      </div>
    );
  }
);

ScheduleBlock.displayName = "ScheduleBlock";

export default ScheduleBlock;
