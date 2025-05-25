"use client";

import { useState } from "react";
import { Button, ChevronIcon } from "@/components";
import { usePostingInfo } from "./hooks/usePostingInfo";
import { useParams } from "next/navigation";
import SnsProfile from "@/app/(mypage)/mypage/_components/SnsProfile";
import { ScheduleBlock } from "../../[projectId]/new-content/_components/step";
import { format } from "date-fns";
import { Platforms } from "@/types/platform";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";

interface Posting {
  postingId: number;
  postingTitle: string | null;
  postingContent: string;
  scheduledAt: string | null;
  postingType: string;
  postingState: string;
  postingLink: string | null;
  postingImages: string[];
}

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  INSTAGRAM: Platforms.INSTAGRAM,
  THREADS: Platforms.THREADS,
  FACEBOOK: Platforms.FACEBOOK,
};

export const CollapsibleReservationTime = () => {
  const { projectId } = useParams();
  const { data: postingInfo } = usePostingInfo(Number(projectId));
  const [isOpen, setIsOpen] = useState(false);

  const parseScheduledAt = (scheduledAt: string | null) => {
    if (!scheduledAt) return { date: null, time: null };

    const date = new Date(scheduledAt);
    return {
      date: format(date, "yyyy-MM-dd"),
      time: format(date, "a hh:mm").replace("am", "AM").replace("pm", "PM"),
    };
  };

  return (
    <div className="flex flex-col gap-4 py-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <p className="text-b2M text-grayscale-800">예약 시간</p>
        <ChevronIcon type={isOpen ? "up" : "down"} className="w-5 h-5 text-grayscale-500" />
      </div>
      {isOpen && (
        <div className="flex flex-col gap-5">
          <div className="w-full h-[1px] bg-grayscale-200" />
          <div className="flex flex-col gap-4">
            {postingInfo?.data.map((posting: Posting) => {
              const { date, time } = parseScheduledAt(posting.scheduledAt);
              const platform = posting.postingType
                ? snsTypeToPlatform[posting.postingType]
                : undefined;

              return (
                <div key={posting.postingId} className="flex items-center justify-between">
                  <div className="w-[70px]">{platform && <SnsProfile type={platform} />}</div>
                  <ScheduleBlock platform={platform} selectedDate={date} selectedTime={time} />
                </div>
              );
            })}
          </div>
          <Button variant="subAction" className="w-full">
            예약 일정 수정하기
          </Button>
        </div>
      )}
    </div>
  );
};

export default CollapsibleReservationTime;
