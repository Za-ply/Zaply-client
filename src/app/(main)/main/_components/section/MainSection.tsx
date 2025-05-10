import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CHIP_TYPES } from "../constants/chips";
import { useContentStore } from "@/stores/useContentStore";
import Chips from "./Chips";
import ContentButton from "./ContentButton";

const MainSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [username, setUsername] = useState("민영");

  const { counts } = useContentStore();

  const isEmpty = counts.reserved === 0 && counts.recent === 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % CHIP_TYPES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentType = CHIP_TYPES[currentIndex];

  return (
    <section className="mt-[90px] flex flex-col items-center justify-center gap-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentType}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4 }}>
          <Chips
            type={currentType}
            month={5}
            counts={{
              default: 1234,
              like: 567,
              follow: 89,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {isEmpty ? (
        <p className="text-t3 text-grayscale-900 text-center">
          {username}님의 콘텐츠를
          <br />
          재플리와 함께 성장시켜 보세요!
        </p>
      ) : (
        <p className="text-t3 text-grayscale-900 text-center">
          {username}님의 콘텐츠가
          <br />
          재플리와 함께 성장하고 있어요
        </p>
      )}

      <ContentButton />
    </section>
  );
};

export default MainSection;
