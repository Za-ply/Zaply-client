"use client";

import { useSheetStore } from "../../store";

interface ScheduleBlockProps {
  date: string;
  time: string;
  onClick?: () => void;
}

const ScheduleBlock = ({ date, time, onClick }: ScheduleBlockProps) => {
  const { setIsOpen } = useSheetStore();

  return (
    <div className="flex items-center gap-2">
      <div
        className="w-[116px] px-4 py-2 border border-grayscale-300 rounded-[8px] text-b3M text-grayscale-500 text-center cursor-pointer"
        onClick={() => setIsOpen(true)}>
        {date}
      </div>
      <div
        className="w-[116px] px-4 py-2 border border-grayscale-300 rounded-[8px] text-b3M text-grayscale-500 text-center cursor-pointer"
        onClick={() => setIsOpen(true)}>
        {time}
      </div>
    </div>
  );
};

export default ScheduleBlock;
