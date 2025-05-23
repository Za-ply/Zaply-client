import { useContentStore } from "@/stores/useContentStore";
import { motion } from "framer-motion";

const ContentToggle = () => {
  const activeTab = useContentStore(state => state.activeTab);
  const setActiveTab = useContentStore(state => state.setActiveTab);
  const counts = useContentStore(state => state.counts);

  return (
    <div className="relative w-full bg-blue-300/30 rounded-[8px] py-[6px] px-2 flex items-center justify-between gap-2">
      <motion.div
        className="absolute top-[6px] left-[8px] h-[calc(100%-12px)] w-[calc(50%-8px)] rounded-[8px] bg-grayscale-100 z-0 shadow-drop"
        layout
        animate={{ x: activeTab === "reserved" ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      <div className="relative z-10 w-1/2">
        <button
          onClick={() => setActiveTab("reserved")}
          className={`w-full px-4 py-2 text-center text-b3M rounded-[8px] cursor-pointer transition-colors duration-200 ${
            activeTab === "reserved" ? "text-grayscale-800" : "text-grayscale-600"
          }`}>
          예약된 콘텐츠 <span className="text-blue-700">{counts.reserved}</span>
        </button>
      </div>
      <div className="relative z-10 w-1/2">
        <button
          onClick={() => setActiveTab("recent")}
          className={`w-full px-4 py-2 text-center text-b3M rounded-[8px] cursor-pointer transition-colors duration-200 ${
            activeTab === "recent" ? "text-grayscale-800" : "text-grayscale-600"
          }`}>
          최근 발행된 콘텐츠 <span className="text-blue-700">{counts.recent}</span>
        </button>
      </div>
    </div>
  );
};

export default ContentToggle;
