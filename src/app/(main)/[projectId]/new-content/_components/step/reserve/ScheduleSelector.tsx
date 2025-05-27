"use client";

import { motion, AnimatePresence } from "framer-motion";
import SnsProfile from "@/app/(mypage)/mypage/_components/SnsProfile";
import { CircleCheckBoldIcon, CircleCheckIcon } from "@/components";
import useUserStore from "@/stores/userStore";
import { Platforms } from "@/types/platform";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import ScheduleBlock from "./ScheduleBlock";
import { useReserveStore } from "../../store/reserve-store";
import { format } from "date-fns";
import { selectSheetStore } from "../../store/select-sheet-store";
import { SheetOptions } from "@/constants/sheet-options";
import { DrawerSheet } from "@/components/drawer";
import { CalendarBottomContent } from "./CalendarBottomContent";
import { PostingInfo } from "@/app/(main)/reserved-contents/_components/types/posting";
import PlatformButton from "../content-make/PlatfomButton";

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  FACEBOOK: Platforms.FACEBOOK,
  THREADS: Platforms.THREADS,
  INSTAGRAM: Platforms.INSTAGRAM,
} as const;

interface ScheduleSelectorProps {
  isUpdate?: boolean;
  posting?: PostingInfo;
}

export const ScheduleSelector = ({ isUpdate = false, posting }: ScheduleSelectorProps) => {
  const accounts = useUserStore(state => state.accounts);
  const { isAll, setIsAll } = useReserveStore();
  const store = selectSheetStore[SheetOptions.CALENDAR];
  const { setIsOpen } = store();

  const linkedPlatforms = accounts
    .map(account => snsTypeToPlatform[account.snsType])
    .filter(Boolean);

  const parseScheduledAt = (scheduledAt: string | null) => {
    if (!scheduledAt) return { date: null, time: null };

    const date = new Date(scheduledAt);
    return {
      date: format(date, "yyyy-MM-dd"),
      time: format(date, "a hh:mm").replace("am", "AM").replace("pm", "PM"),
    };
  };

  const displayPlatforms =
    isUpdate && posting
      ? posting.data.map(p => snsTypeToPlatform[p.postingType]).filter(Boolean)
      : linkedPlatforms;

  const handleScheduleClick = (platform?: SocialPlatform) => {
    if (platform) {
      setIsAll(false);
    }
    setIsOpen(true);
  };

  return (
    <>
      <div
        className={`"w-full flex flex-col gap-4 rounded-[12px] ${isUpdate ? "py-8" : "border border-blue-500 p-5 mt-3"}`}>
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => setIsAll(!isAll)}>
            <p className="text-b3M text-blue-blueblack">한번에 예약</p>
            {isAll ? (
              <CircleCheckBoldIcon className="w-5 h-5 text-blue-700" />
            ) : (
              <CircleCheckIcon className="w-5 h-5 text-grayscale-500" />
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="w-[70px]" />
            <div className="flex items-center gap-2">
              <ScheduleBlock onClick={() => handleScheduleClick()} />
            </div>
          </div>

          <AnimatePresence>
            {!isAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden flex flex-col gap-2">
                <div className="w-full h-[1px] bg-grayscale-200 my-2" />
                {displayPlatforms.map(platform => {
                  const isUpdateMode = isUpdate && posting;
                  const targetPosting = isUpdateMode
                    ? posting.data.find(p => snsTypeToPlatform[p.postingType] === platform)
                    : null;
                  const { date, time } =
                    isUpdateMode && targetPosting
                      ? parseScheduledAt(targetPosting.scheduledAt)
                      : { date: null, time: null };

                  return (
                    <div key={platform} className="flex items-center justify-between">
                      <div className="w-[70px]">
                        <PlatformButton
                          type="content"
                          platform={platform}
                          hasProfileImage={true}
                          isAccountConnected={true}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <ScheduleBlock
                          platform={platform}
                          isLinked={true}
                          selectedDate={isUpdateMode ? date : undefined}
                          selectedTime={isUpdateMode ? time : undefined}
                          onClick={() => handleScheduleClick(platform)}
                        />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <DrawerSheet
        store={selectSheetStore[SheetOptions.CALENDAR]}
        contentProps={<CalendarBottomContent />}
        showCloseButton={false}
      />
    </>
  );
};

export default ScheduleSelector;
