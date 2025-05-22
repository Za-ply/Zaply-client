"use client";

import { ArrowIcon, Button } from "@/components";
import { Calendar } from "@/components/common/calendar";
import { useState } from "react";
import TimePickerBottomContent from "./TimePickerBottomContent";
import { useReserveStore } from "../../store/reserve-store";
import Bedge from "../content-make/Bedge";

export const CalendarBottomContent = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [showTimePicker, setShowTimePicker] = useState(false);
  const { currentPlatform } = useReserveStore();

  const handleNext = () => {
    if (!date) return;
    setShowTimePicker(true);
  };

  const handleBack = () => {
    setShowTimePicker(false);
  };

  if (showTimePicker) {
    return <TimePickerBottomContent selectedDate={date!} onBack={handleBack} />;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full pb-4 border-b border-grayscale-200 text-t4 text-blue-blueblack ">
        {currentPlatform ? (
          <div className="flex items-center gap-2">
            <Bedge />
            <p className="text-t4 text-blue-blueblack">예약 일정</p>
          </div>
        ) : (
          "공통 예약 일정"
        )}
      </div>
      <Calendar selected={date} onSelect={setDate} mode="single" />
      <Button
        rightIcon={<ArrowIcon type="right" className="text-grayscale-100" />}
        className="mt-3 py-3 pb-15"
        disabled={!date}
        variant={date ? "active" : "deactive"}
        onClick={handleNext}>
        다음
      </Button>
    </div>
  );
};

export default CalendarBottomContent;
