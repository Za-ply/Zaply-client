import { searchOptions } from "@/constants/search-options";
import { useEffect, useState } from "react";
import { ChevronIcon } from "../icons";
import { instagramCircle, facebookCircle, threadCircle } from "@public/assets/images/sns";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePlatformStore } from "@/app/(main)/new-content/_components/store";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedPlatform } = usePlatformStore();
  const [selectedOption, setSelectedOption] = useState<string>(
    selectedPlatform || searchOptions[0].label
  );

  const handleOptionClick = (e: React.MouseEvent<HTMLDivElement>, option: string) => {
    e.stopPropagation();
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="w-[116px] relative text-grayscale-900">
      <div
        className="flex items-center justify-between gap-2"
        onClick={e => {
          e.stopPropagation();
          setIsOpen(prev => !prev);
        }}>
        <p className="text-t4 ">{selectedOption}</p>
        <ChevronIcon
          type={"down"}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="z-[20] w-[176px] absolute left-0 top-8 shadow-dropdown rounded-[4px] bg-grayscale-100">
            {searchOptions
              .filter(option => option.label !== selectedOption)
              .map(option => (
                <motion.div
                  key={option.value}
                  className="flex items-center justify-between gap-2 px-3 py-2 cursor-pointer hover:bg-grayscale-200"
                  onClick={e => handleOptionClick(e, option.label)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  <p className="text-b2M">{option.label}</p>
                  <Image
                    src={
                      option.value === "Instagram"
                        ? instagramCircle
                        : option.value === "Facebook"
                          ? facebookCircle
                          : threadCircle
                    }
                    alt={option.label}
                    width={24}
                    height={24}
                  />
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
