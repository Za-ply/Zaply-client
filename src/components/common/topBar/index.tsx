"use client";

import React from "react";
import cn from "@/utils/cn";
import { motion } from "framer-motion";
import { topBarAnimation } from "@/components/animation";

interface TopBarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
  isBlur?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ left, center, right, className, isBlur = false }) => {
  return (
    <motion.header
      initial="normal"
      animate={isBlur ? "blur" : "normal"}
      variants={topBarAnimation}
      className={cn(
        "w-full max-w-[440px] fixed top-0 left-0 right-0 z-50 mx-auto flex items-end justify-between h-[66px] py-3 px-5",
        isBlur && "backdrop-blur-[15px] bg-white/30 border-b border-grayscale-100",
        className
      )}
      style={
        isBlur
          ? {
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
            }
          : undefined
      }>
      <div className="w-[80px] flex justify-start">{left}</div>
      <div className="flex justify-center flex-1">{center}</div>
      <div className="w-[80px] flex justify-end">{right}</div>
    </motion.header>
  );
};

export default TopBar;
