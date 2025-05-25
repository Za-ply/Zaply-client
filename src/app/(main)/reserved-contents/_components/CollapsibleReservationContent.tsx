"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { usePostingInfo } from "./hooks/usePostingInfo";
import { Button, ChevronIcon } from "@/components";
import { motion, AnimatePresence } from "framer-motion";

export const CollapsibleReservationContent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { projectId } = useParams();
  const { data: postingInfo } = usePostingInfo(Number(projectId));

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
            <div className="text-b3 text-grayscale-600">플랫폼별 콘텐츠 내용</div>
            <Button variant="subAction" className="w-full">
              콘텐츠 내용 수정하기
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleReservationContent;
