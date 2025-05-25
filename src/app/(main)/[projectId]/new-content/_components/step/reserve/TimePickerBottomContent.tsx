"use client";

import { Button, ChevronIcon } from "@/components";
import TimePicker from "@/components/common/timePicker";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useState, memo, useCallback, useMemo } from "react";
import { useReserveStore } from "../../store/reserve-store";
import Badge from "./Badge";
import { selectSheetStore } from "../../store/select-sheet-store";
import { SheetOptions } from "@/constants/sheet-options";

interface TimePickerBottomContentProps {
  selectedDate: Date;
  onBack?: () => void;
}

const TimePickerBottomContent = memo(({ selectedDate, onBack }: TimePickerBottomContentProps) => {
  const [timePickerValue, setTimePickerValue] = useState<{
    period: "AM" | "PM";
    hour: string;
    minute: string;
  } | null>(null);
  const { setPlatformReserve, currentPlatform, isAll, setSelectedDate, setSelectedTime } =
    useReserveStore();
  const store = selectSheetStore[SheetOptions.CALENDAR];
  const { setIsOpen } = store();

  const formattedDate = useMemo(() => {
    return format(selectedDate, "yy/MM/dd(EEE)", { locale: ko });
  }, [selectedDate]);

  const handleConfirm = useCallback(() => {
    if (!timePickerValue) return;

    const timeString = `${timePickerValue.period} ${timePickerValue.hour}:${timePickerValue.minute}`;

    if (isAll) {
      // 한 번에 예약 정보 설정
      setSelectedDate(selectedDate);
      setSelectedTime(timeString);
    } else if (currentPlatform) {
      // 현재 선택된 플랫폼에만 예약 정보 설정
      setPlatformReserve(currentPlatform, {
        date: selectedDate,
        time: timeString,
      });
    }

    setIsOpen(false);
  }, [
    timePickerValue,
    isAll,
    currentPlatform,
    selectedDate,
    setSelectedDate,
    setSelectedTime,
    setPlatformReserve,
    setIsOpen,
  ]);

  const headerContent = useMemo(() => {
    return (
      <div className="flex items-center gap-1">
        <ChevronIcon type="left" className="text-grayscale-900 cursor-pointer" onClick={onBack} />
        {currentPlatform ? (
          <div className="flex items-center gap-2">
            <Badge platform={currentPlatform} />
            <p className="text-t4 text-blue-blueblack">예약 일정</p>
          </div>
        ) : (
          "공통 예약 일정"
        )}
      </div>
    );
  }, [currentPlatform, onBack]);

  return (
    <div className="flex flex-col">
      <div className="w-full pb-4 border-b border-grayscale-200 text-t4 text-blue-blueblack flex items-center justify-between">
        {headerContent}
        <p className="text-b1R text-blue-700">{formattedDate}</p>
      </div>
      <div className="w-full h-[324px] flex items-center justify-center">
        <TimePicker onChange={setTimePickerValue} />
      </div>
      <Button className="mt-3 py-3 pb-15" onClick={handleConfirm}>
        확인
      </Button>
    </div>
  );
});

TimePickerBottomContent.displayName = "TimePickerBottomContent";

export default TimePickerBottomContent;
