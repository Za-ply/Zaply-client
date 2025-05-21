"use client";

import { Button, ChevronIcon } from "@/components";
import TimePicker from "@/components/common/timePicker";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";
import { useReserveStore } from "../../store/reserve-store";
import { useSheetStore } from "../../store/sheet-store";

interface TimePickerBottomContentProps {
  selectedDate: Date;
  onBack?: () => void;
}

export const TimePickerBottomContent = ({ selectedDate, onBack }: TimePickerBottomContentProps) => {
  const [selectedTime, setSelectedTime] = useState<{
    period: "AM" | "PM";
    hour: string;
    minute: string;
  } | null>(null);
  const { setSelectedDate, setSelectedTime: setStoreTime } = useReserveStore();
  const { setIsOpen } = useSheetStore();
  const formattedDate = format(selectedDate, "yy/MM/dd(EEE)", { locale: ko });

  const handleConfirm = () => {
    if (!selectedTime) return;
    setSelectedDate(selectedDate);
    setStoreTime(`${selectedTime.period} ${selectedTime.hour}:${selectedTime.minute}`);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full pb-4 border-b border-grayscale-200 text-t4 text-blue-blueblack flex items-center justify-between">
        <div className="flex items-center gap-1">
          <ChevronIcon type="left" className="text-grayscale-900 cursor-pointer" onClick={onBack} />
          공통 예약 일정
        </div>
        <p className="text-b1R text-blue-700">{formattedDate}</p>
      </div>
      <div className="w-full h-[324px] flex items-center justify-center">
        <TimePicker onChange={setSelectedTime} />
      </div>
      <Button className="mt-3 py-3 pb-15" onClick={handleConfirm}>
        확인
      </Button>
    </div>
  );
};

export default TimePickerBottomContent;
