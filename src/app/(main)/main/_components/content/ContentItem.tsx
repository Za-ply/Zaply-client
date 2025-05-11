import { ChevronIcon, TimeIcon } from "@/components/icons";
import { useContentStore } from "@/stores/useContentStore";
import { ContentItemProps } from "@/types/contentItem";
import { useDateLabel, useFormattedDateTime } from "../hooks/useFormatTime";
import Platforms from "./Platforms";

const ContentItem = ({ type, title, publishedAt, platforms }: ContentItemProps) => {
  const formatted = useFormattedDateTime(publishedAt);
  const label = useDateLabel(publishedAt);
  const toggleState = useContentStore(state => state.activeTab);

  return (
    <article className="w-full h-[105px] p-4 flex flex-col gap-[10px] rounded-[12px] bg-white shadow-drop cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-[48px] h-[26px] rounded-[4px] text-grayscale-600 text-b4M text-center border border-grayscale-300 bg-grayscale-100 text-b4M text-grayscale-700 flex items-center justify-center">
            {type}
          </div>
          <p className="text-t3 text-grayscale-900 truncate">{title}</p>
        </div>
        <ChevronIcon type="right" className="text-grayscale-500" />
      </div>
      <div className="w-full h-[1px] bg-grayscale-300" />
      <div className="flex items-cetner justify-between">
        {toggleState === "recent" ? (
          <p className="text-b3R text-grayscale-600">{formatted}</p>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-1">
              <TimeIcon className="text-blue-blueblack" />
              <p className="text-t4 text-blue-blueblack">{label}</p>
            </div>
            <p className="text-b3R text-grayscale-600">{formatted}</p>
          </div>
        )}
        <Platforms platforms={platforms} />
      </div>
    </article>
  );
};

export default ContentItem;
