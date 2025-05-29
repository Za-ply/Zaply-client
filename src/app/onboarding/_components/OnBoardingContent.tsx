"use client";

import { EllipseIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeUpVariants, transition } from "./animation";
import { ONBOARDING_CONTENTS } from "@/app/(auth)/sign-in/_components/constants/onboardingContents";
import useRouterPrefetch from "@/utils/useRouterPrefetch";
import Image from "next/image";

const OnBoardingContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useRouterPrefetch({
    path: ["/sign-in", "/link", "/main"],
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollX = scrollRef.current?.scrollLeft ?? 0;
      const width = scrollRef.current?.offsetWidth ?? 1;
      const index = Math.round(scrollX / width);
      setCurrentIndex(index);
    };

    const el = scrollRef.current;
    el?.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mt-[180px] flex flex-col items-center justify-center gap-10 w-full">
      <div
        ref={scrollRef}
        className="flex w-full gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}>
        {ONBOARDING_CONTENTS.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center justify-center flex-shrink-0 w-full gap-12 snap-start"
            initial="hidden"
            animate={currentIndex === index ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={transition}>
            <p className="text-center whitespace-pre-line text-blue-blueblack text-h2">
              {item.title}
            </p>
            <div className="w-full h-[240px] flex items-center justify-center">
              <Image
                src={item.gui}
                alt="onboarding"
                width={327}
                height={240}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2">
        {ONBOARDING_CONTENTS.map((_, i) => (
          <EllipseIcon
            key={i}
            className={i === currentIndex ? "text-blue-700" : "text-grayscale-400"}
          />
        ))}
      </div>
    </section>
  );
};

export default OnBoardingContent;
