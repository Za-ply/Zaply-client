"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";

interface TimePickerProps {
  onChange?: (value: { period: "AM" | "PM"; hour: string; minute: string }) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ onChange }) => {
  const ITEM_HEIGHT = 40;

  // 정적 배열은 useMemo로 메모이제이션
  const { hours, minutes, periods } = useMemo(
    () => ({
      hours: ["12", ...Array.from({ length: 11 }, (_, i) => String(i + 1).padStart(2, "0"))],
      minutes: Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0")),
      periods: ["오전", "오후"],
    }),
    []
  );

  // 초기값 계산도 useMemo로 메모이제이션
  const { initialPeriod, initialHour, initialMinute, initialIndices } = useMemo(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const period: "AM" | "PM" = currentHour >= 12 ? "PM" : "AM";
    const hour = String(currentHour % 12 || 12).padStart(2, "0");
    const minute = String(currentMinute).padStart(2, "0");

    return {
      initialPeriod: period,
      initialHour: hour,
      initialMinute: minute,
      initialIndices: {
        hour: hours.findIndex(h => h === hour),
        minute: minutes.findIndex(m => m === minute),
        period: period === "AM" ? 0 : 1,
      },
    };
  }, [hours, minutes]);

  const [period, setPeriod] = useState<"AM" | "PM">(initialPeriod);
  const [selectedHour, setSelectedHour] = useState(initialHour);
  const [selectedMinute, setSelectedMinute] = useState(initialMinute);
  const [centerHourIndex, setCenterHourIndex] = useState(initialIndices.hour);
  const [centerMinuteIndex, setCenterMinuteIndex] = useState(initialIndices.minute);
  const [centerPeriodIndex, setCenterPeriodIndex] = useState(initialIndices.period);

  const periodRef = useRef<HTMLDivElement>(null);
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);

  // 스타일 계산 함수 메모이제이션
  const getItemStyle = useCallback((index: number, centerIndex: number) => {
    const diff = Math.abs(index - centerIndex);
    if (diff >= 3) return "invisible opacity-0";
    if (diff === 2) return "text-grayscale-500 scale-75 font-[400]";
    if (diff === 1) return "text-grayscale-900 scale-90 font-[400]";
    return "text-grayscale-900 scale-100 font-[400]";
  }, []);

  // 스크롤 핸들러 메모이제이션
  const handlePeriodScroll = useCallback(
    (element: HTMLDivElement) => {
      const scrollTop = element.scrollTop;
      const index = Math.round(scrollTop / ITEM_HEIGHT);

      if (index < 0 || index >= periods.length) {
        element.scrollTop = Math.max(0, Math.min(scrollTop, ITEM_HEIGHT * (periods.length - 1)));
        return;
      }

      const newPeriod = index === 0 ? "AM" : "PM";
      if (newPeriod !== period) {
        setPeriod(newPeriod);
        onChange?.({ period: newPeriod, hour: selectedHour, minute: selectedMinute });
      }

      setCenterPeriodIndex(index);
    },
    [period, selectedHour, selectedMinute, periods.length, onChange]
  );

  const handleScroll = useCallback(
    (
      element: HTMLDivElement,
      items: string[],
      setSelected: (value: string) => void,
      isHour: boolean
    ) => {
      const scrollTop = element.scrollTop;
      const index = Math.round(scrollTop / ITEM_HEIGHT);

      if (index < 0 || index >= items.length) {
        element.scrollTop = Math.max(0, Math.min(scrollTop, ITEM_HEIGHT * (items.length - 1)));
        return;
      }

      const selectedValue = items[index];
      if (selectedValue) {
        setSelected(selectedValue);
        onChange?.({
          period,
          hour: isHour ? selectedValue : selectedHour,
          minute: isHour ? selectedMinute : selectedValue,
        });
      }

      isHour ? setCenterHourIndex(index) : setCenterMinuteIndex(index);
    },
    [period, selectedHour, selectedMinute, onChange]
  );

  // 초기 스크롤 위치 설정
  useEffect(() => {
    if (hourRef.current && minuteRef.current && periodRef.current) {
      periodRef.current.scrollTop = initialIndices.period * ITEM_HEIGHT;
      hourRef.current.scrollTop = initialIndices.hour * ITEM_HEIGHT;
      minuteRef.current.scrollTop = initialIndices.minute * ITEM_HEIGHT;
    }
  }, [initialIndices]);

  const scrollerClass = "h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide scroll-smooth";

  return (
    <div className="w-full p-3">
      <div className="flex h-[200px] bg-grayscale-100 rounded-[8px] overflow-hidden items-center">
        {/* 오전/오후 선택 */}
        <div className="w-1/3 relative h-full">
          <div className="absolute w-full h-10 top-[80px] bg-blue-300 pointer-events-none z-10 rounded-l-[8px]" />
          <div
            ref={periodRef}
            className={scrollerClass}
            onScroll={e => handlePeriodScroll(e.currentTarget)}>
            <div className="h-[80px]" />
            {periods.map((p, index) => (
              <div
                key={p}
                className="snap-center h-10 flex items-center justify-center text-t3 font-[400]">
                <div
                  className={`transition-all duration-300 z-20 ${getItemStyle(index, centerPeriodIndex)}`}>
                  {p}
                </div>
              </div>
            ))}
            <div className="h-[80px]" />
          </div>
        </div>

        {/* 시 Picker */}
        <div className="w-1/3 relative h-full">
          <div className="absolute w-full h-10 top-[80px] bg-blue-300 pointer-events-none z-10" />
          <div
            ref={hourRef}
            className={scrollerClass}
            onScroll={e => handleScroll(e.currentTarget, hours, setSelectedHour, true)}>
            <div className="h-[80px]" />
            {hours.map((hour, index) => (
              <div
                key={hour}
                className="snap-center h-10 flex items-center justify-center text-t3 font-[400]">
                <div
                  className={`transition-all duration-300 z-20 ${getItemStyle(index, centerHourIndex)}`}>
                  {hour}
                </div>
              </div>
            ))}
            <div className="h-[80px]" />
          </div>
        </div>

        {/* 분 Picker */}
        <div className="w-1/3 relative h-full">
          <div className="absolute w-full h-10 top-[80px] bg-blue-300 pointer-events-none z-10 rounded-r-[8px]" />
          <div
            ref={minuteRef}
            className={scrollerClass}
            onScroll={e => handleScroll(e.currentTarget, minutes, setSelectedMinute, false)}>
            <div className="h-[80px]" />
            {minutes.map((minute, index) => (
              <div
                key={minute}
                className="snap-center h-10 flex items-center justify-center text-t3 font-[400]">
                <div
                  className={`transition-all duration-300 z-20 ${getItemStyle(index, centerMinuteIndex)}`}>
                  {minute}
                </div>
              </div>
            ))}
            <div className="h-[80px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
