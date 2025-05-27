"use client";

import { useParams } from "next/navigation";
import { ScheduleSelector } from "../../[projectId]/new-content/_components/step";
import { usePostingInfo } from "./hooks/usePostingInfo";
import { Button, CheckIcon } from "@/components";
import { useReserveStore } from "../../[projectId]/new-content/_components/store/reserve-store";
import { useUpdateReservation } from "./hooks/useUpdateReservation";
import { useMemo } from "react";

export const UpdateTimeContent = () => {
  const { projectId } = useParams();
  const { data: postingInfo } = usePostingInfo(Number(projectId));
  const { platformReserves, isAll, selectedDate, selectedTime } = useReserveStore();
  const { updateReservationTime } = useUpdateReservation(Number(projectId));

  const handleUpdateTime = useMemo(
    () => () => {
      if (!postingInfo?.data) return;
      updateReservationTime({
        postingInfo: postingInfo.data,
        isAll,
        selectedDate,
        selectedTime,
        platformReserves,
      });
    },
    [postingInfo?.data, isAll, selectedDate, selectedTime, platformReserves, updateReservationTime]
  );

  return (
    <section className="w-full flex flex-col mt-[60px]">
      <ScheduleSelector isUpdate={true} posting={postingInfo} />
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
        <Button className="w-full" leftIcon={<CheckIcon />} onClick={handleUpdateTime}>
          완료
        </Button>
      </div>
    </section>
  );
};

export default UpdateTimeContent;
