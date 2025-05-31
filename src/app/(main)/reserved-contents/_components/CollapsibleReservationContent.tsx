"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { usePostingInfo } from "./hooks/usePostingInfo";
import { Button, ChevronIcon } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import PlatformButton from "../../[projectId]/new-content/_components/step/content-make/PlatfomButton";
import { Platforms } from "@/types/platform";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { Posting } from "./types/posting";

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  INSTAGRAM: Platforms.INSTAGRAM,
  THREADS: Platforms.THREADS,
  FACEBOOK: Platforms.FACEBOOK,
};

export const CollapsibleReservationContent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { projectId } = useParams();
  const { data: postingInfo } = usePostingInfo(Number(projectId));
  const [selectedPostingId, setSelectedPostingId] = useState<number | null>(
    postingInfo?.data[0]?.postingId || null
  );

  const selectedPosting = postingInfo?.data.find(
    (posting: { postingId: number | null }) => posting.postingId === selectedPostingId
  );

  return (
    <div className="flex flex-col gap-4 py-4 bg-grayscale-100 px-5">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <p className="text-b2M text-grayscale-800">{postingInfo?.data.projectTitle}</p>
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
            <div className="w-full h-[1px] bg-grayscale-200" />

            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-center gap-3">
                {postingInfo?.data.map((posting: Posting, index: number) => {
                  const platform = posting.postingType
                    ? snsTypeToPlatform[posting.postingType]
                    : undefined;
                  if (!platform) return null;

                  return (
                    <div
                      key={posting.postingId}
                      onClick={() => setSelectedPostingId(posting.postingId)}>
                      <PlatformButton
                        platform={platform}
                        type="content"
                        isAccountConnected={true}
                        hasProfileImage={true}
                        isFirst={index === 0}
                      />
                    </div>
                  );
                })}
              </div>

              {selectedPosting && (
                <div className="text-b4M text-grayscale-800">{selectedPosting.postingContent}</div>
              )}

              <Button variant="subAction" className="w-full">
                콘텐츠 내용 수정하기
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleReservationContent;
