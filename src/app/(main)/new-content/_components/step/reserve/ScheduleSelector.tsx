"use client";

import { motion, AnimatePresence } from "framer-motion";
import SnsProfile from "@/app/(mypage)/mypage/_components/SnsProfile";
import { CircleCheckBoldIcon, CircleCheckIcon } from "@/components";
import useUserStore from "@/stores/userStore";
import { Platforms } from "@/types/platform";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import ScheduleBlock from "./ScheduleBlock";
import { useReserveStore } from "../../store/reserve-store";

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  FACEBOOK: Platforms.FACEBOOK,
  THREADS: Platforms.THREADS,
  INSTAGRAM: Platforms.INSTAGRAM,
} as const;

export const ScheduleSelector = () => {
  const accounts = useUserStore(state => state.accounts);
  const { isAll, setIsAll } = useReserveStore();

  const linkedPlatforms = accounts
    .map(account => snsTypeToPlatform[account.snsType])
    .filter(Boolean);

  return (
    <div className="w-full flex flex-col gap-4 p-5 border border-blue-500 rounded-[12px] mt-3">
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
            <ScheduleBlock />
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
              {linkedPlatforms.map(platform => (
                <div key={platform} className="flex items-center justify-between">
                  <div className="w-[70px]">
                    <SnsProfile type={platform} />
                  </div>
                  <div className="flex items-center gap-2">
                    <ScheduleBlock platform={platform} isLinked={true} />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScheduleSelector;
