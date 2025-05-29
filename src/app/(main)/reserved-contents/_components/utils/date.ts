import { format } from "date-fns";

export const parseScheduledAt = (scheduledAt: string | null) => {
  if (!scheduledAt) return { date: null, time: null };
  const date = new Date(scheduledAt);
  return {
    date: format(date, "yyyy-MM-dd"),
    time: format(date, "a hh:mm").replace("am", "AM").replace("pm", "PM"),
  };
};

export const formatDateTimeForAPI = (date: Date, time: string) => {
  const timeStr = time.replace(/[AP]M\s*/, "");
  const [hours, minutes] = timeStr.split(":").map(Number);

  const isPM = time.includes("PM");
  const adjustedHours = isPM ? hours + 12 : hours;

  const koreaDate = new Date(date);
  koreaDate.setHours(adjustedHours, minutes, 0, 0);

  const year = koreaDate.getFullYear();
  const month = String(koreaDate.getMonth() + 1).padStart(2, "0");
  const day = String(koreaDate.getDate()).padStart(2, "0");
  const hour = String(koreaDate.getHours()).padStart(2, "0");
  const minute = String(koreaDate.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hour}:${minute}`;
};
