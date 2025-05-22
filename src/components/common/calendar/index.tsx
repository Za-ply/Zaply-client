"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/utils";
import { format, addMonths } from "date-fns";
import { ko } from "date-fns/locale";
import { buttonVariants } from "../button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const today = new Date();
  const sixMonthsLater = addMonths(today, 6);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("pt-5 px-3 pb-3", className)}
      locale={ko}
      fromDate={today}
      toDate={sixMonthsLater}
      formatters={{
        formatCaption: (date, options) => format(date, "yyyy년 M월", { locale: options?.locale }),
      }}
      modifiers={{
        sunday: date => date.getDay() === 0,
      }}
      modifiersClassNames={{
        sunday: "text-redscale-700",
      }}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 w-full",
        caption: "w-full flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn("h-6 w-6 bg-transparent p-0 opacity-50 hover:opacity-100"),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex w-full",
        head_cell:
          "w-full text-muted-foreground rounded-md flex-1 font-normal text-b3R text-grayscale-900",
        row: "flex w-full mt-2",
        cell: cn(
          "flex-1 relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-[44px] w-[44px] p-0 font-normal aria-selected:opacity-100 cursor-pointer text-b3R text-grayscale-900"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-blue-700 !text-grayscale-100",
        day_today: "!text-blue-700 [&[aria-selected]]:!text-grayscale-100",
        day_outside:
          "!text-grayscale-500 aria-selected:bg-accent/50 aria-selected:text-grayscale-500",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-6 w-6", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-6 w-6", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
