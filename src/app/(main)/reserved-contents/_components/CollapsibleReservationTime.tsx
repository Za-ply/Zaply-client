"use client";

import { useState } from "react";
import { Button, ChevronIcon } from "@/components";
import { usePostingInfo } from "./hooks/usePostingInfo";
import { useParams, useRouter } from "next/navigation";
import SnsProfile from "@/app/(mypage)/mypage/_components/SnsProfile";
import { ScheduleBlock } from "../../[projectId]/new-content/_components/step";
import { format } from "date-fns";
import { Platforms } from "@/types/platform";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { Posting } from "./types/posting";
import { motion, AnimatePresence } from "framer-motion";
import { useReserveStore } from "../../[projectId]/new-content/_components/store/reserve-store";
import PlatformButton from "../../[projectId]/new-content/_components/step/content-make/PlatfomButton";

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  INSTAGRAM: Platforms.INSTAGRAM,
  THREADS: Platforms.THREADS,
  FACEBOOK: Platforms.FACEBOOK,
};

export const CollapsibleReservationTime = () => {
  const router = useRouter();
  const { projectId } = useParams();
  const { data: postingInfo } = usePostingInfo(Number(projectId));
  const [isOpen, setIsOpen] = useState(true);
  const { setSelectedDate, setSelectedTime, setPlatformReserves } = useReserveStore();

  const parseScheduledAt = (scheduledAt: string | null) => {
    if (!scheduledAt) return { date: null, time: null };
    const date = new Date(scheduledAt);
    return {
      date: format(date, "yyyy-MM-dd"),
      time: format(date, "a hh:mm").replace("am", "AM").replace("pm", "PM"),
    };
  };

  const handleUpdateClick = async () => {
    if (!postingInfo?.data) return;

    const firstPosting = postingInfo.data[0];
    const firstScheduledAt = parseScheduledAt(firstPosting.scheduledAt);
    const isAllSame = postingInfo.data.every((posting: Posting) => {
      const { date, time } = parseScheduledAt(posting.scheduledAt);
      return date === firstScheduledAt.date && time === firstScheduledAt.time;
    });

    if (isAllSame) {
      setSelectedDate(new Date(firstScheduledAt.date!));
      setSelectedTime(firstScheduledAt.time!);
    } else {
      const platformReserves: Record<SocialPlatform, { date: Date | null; time: string | null }> = {
        [Platforms.FACEBOOK]: { date: null, time: null },
        [Platforms.THREADS]: { date: null, time: null },
        [Platforms.INSTAGRAM]: { date: null, time: null },
      };

      postingInfo.data.forEach((posting: Posting) => {
        const platform = snsTypeToPlatform[posting.postingType];
        if (platform) {
          const { date, time } = parseScheduledAt(posting.scheduledAt);
          platformReserves[platform] = {
            date: date ? new Date(date) : null,
            time,
          };
        }
      });
      setPlatformReserves(platformReserves);
    }

    router.push(`/reserved-contents/${projectId}/update`);
  };

  return (
    <div className="flex flex-col gap-4 py-4 bg-grayscale-100 px-5">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <p className="text-b2M text-grayscale-800">예약 시간</p>
        <ChevronIcon type={isOpen ? "up" : "down"} className="w-5 h-5 text-grayscale-500" />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden">
            <div className="flex flex-col gap-5 pt-4">
              <div className="w-full h-[1px] bg-grayscale-200" />
              <div className="flex flex-col gap-4">
                {postingInfo?.data.map((posting: Posting) => {
                  const { date, time } = parseScheduledAt(posting.scheduledAt);
                  const platform = posting.postingType
                    ? snsTypeToPlatform[posting.postingType]
                    : undefined;

                  return (
                    <div key={posting.postingId} className="flex items-center justify-between">
                      <div className="w-[70px]">
                        {platform && (
                          <PlatformButton
                            type="content"
                            platform={platform}
                            hasProfileImage={true}
                            isAccountConnected={true}
                            disableSelectedStyle={true}
                            onClick={() => {}}
                            className="pointer-events-none"
                          />
                        )}
                      </div>
                      <ScheduleBlock
                        platform={platform}
                        selectedDate={date}
                        selectedTime={time}
                        isLinked={true}
                        onClick={() => {}}
                      />
                    </div>
                  );
                })}
              </div>
              <Button variant="subAction" className="w-full" onClick={handleUpdateClick}>
                예약 일정 수정하기
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleReservationTime;
