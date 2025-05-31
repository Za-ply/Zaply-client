export const useFormattedDateTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "오후" : "오전";
  const hour12 = hours % 12 || 12;

  return `${year}/${month}/${day} ${period} ${hour12}:${minutes}`;
};

export const useDateLabel = (dateStr: string): string => {
  const targetDate = new Date(dateStr);
  const today = new Date();

  targetDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffInMs = targetDate.getTime() - today.getTime();
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "오늘";
  if (diffInDays === 1) return "내일";
  if (diffInDays > 1) return `${diffInDays}일 후`;
  if (diffInDays === -1) return "어제";
  return `${Math.abs(diffInDays)}일 전`;
};
