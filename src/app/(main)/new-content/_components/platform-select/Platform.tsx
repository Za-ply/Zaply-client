"use client";

import Image from "next/image";
import {
  instagram,
  instagramMono,
  thread,
  threadMono,
  facebook,
  facebookMono,
} from "@public/assets/images/sns";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/utils";
import { Category, Platforms } from "@/types/platform";
import { motion } from "framer-motion";
import CategoryButton from "./CategoryButton";
import { usePlatformStore } from "../store/platform-store";
import { useToast } from "@/utils/useToast";
import { useEffect, useState } from "react";

interface PlatformProps {
  platform: Platforms;
  isSelected: boolean;
  onSelect: () => void;
}

const platformConfig = {
  [Platforms.INSTAGRAM]: {
    name: "Instagram",
    icon: instagram,
    iconMono: instagramMono,
    categories: [Category.POST, Category.REELS, Category.STORY],
  },
  [Platforms.THREADS]: {
    name: "Thread",
    icon: thread,
    iconMono: threadMono,
    categories: [Category.POST],
  },
  [Platforms.FACEBOOK]: {
    name: "Facebook",
    icon: facebook,
    iconMono: facebookMono,
    categories: [Category.POST, Category.REELS, Category.STORY],
  },
};

const Platform = ({ platform, isSelected, onSelect }: PlatformProps) => {
  const config = platformConfig[platform];
  const { selectedCategory, setSelectedCategory } = usePlatformStore();
  const { toast } = useToast();
  const [height, setHeight] = useState(0);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref) {
      setHeight(ref.scrollHeight);
    }
  }, [ref, isSelected]);

  const categoryVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: height },
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between w-full gap-2 px-4 py-3 border cursor-pointer bg-grayscale-200 rounded-xl",
        {
          "border-grayscale-300": !isSelected,
          "border-blue-700": isSelected,
        }
      )}
      onClick={onSelect}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image
              src={config.icon}
              alt={config.name}
              width={24}
              height={24}
              priority
              loading="eager"
              className={cn("absolute top-0 left-0 transition-opacity duration-200", {
                "opacity-100": isSelected,
                "opacity-0": !isSelected,
              })}
            />
            <Image
              src={config.iconMono}
              alt={config.name}
              width={24}
              height={24}
              priority
              loading="eager"
              className={cn("absolute top-0 left-0 transition-opacity duration-200", {
                "opacity-100": !isSelected,
                "opacity-0": isSelected,
              })}
            />
          </div>
          <p
            className={cn("text-b2M", {
              "text-grayscale-900": isSelected,
              "text-grayscale-500": !isSelected,
            })}>
            {config.name}
          </p>
        </div>
        <CheckIcon
          className={cn("w-6 h-6", {
            "text-grayscale-500": !isSelected,
            "text-blue-700": isSelected,
          })}
        />
      </div>

      <motion.div
        className="w-full overflow-hidden"
        animate={isSelected ? "open" : "closed"}
        variants={categoryVariants}
        initial={isSelected ? "open" : "closed"}
        transition={{
          duration: 0.25,
          ease: [0.4, 0, 0.2, 1],
        }}>
        <div ref={setRef} className="w-full">
          <div className="w-full h-[1px] bg-grayscale-300 origin-left" />
          <div className="grid items-center justify-between w-full grid-cols-3 gap-3 pt-2">
            {config.categories.map(category => (
              <CategoryButton
                key={category}
                type={category}
                isSelected={selectedCategory === category}
                onClick={() => {
                  if (category !== Category.POST) {
                    toast({
                      variant: "error",
                      description: "죄송합니다. 아직 준비 중인 기능이에요.",
                    });
                  } else {
                    setSelectedCategory(category);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Platform;
