import { useMemo } from "react";

export const useFormatDate = (date: string) => {
  const formattedDate = useMemo(() => {
    if (!date) return "";

    const dateObj = new Date(date);
    const year = dateObj.getFullYear().toString().slice(-2);
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    return `${year}/${month}/${day}`;
  }, [date]);

  return formattedDate;
};
