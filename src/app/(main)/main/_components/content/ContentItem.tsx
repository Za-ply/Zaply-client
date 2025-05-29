import { ChevronIcon, TimeIcon } from "@/components/icons";
import { useContentStore } from "@/stores/useContentStore";
import { useDateLabel, useFormattedDateTime } from "../hooks/useFormatTime";
import Platforms from "./Platforms";
import { Platform } from "@/types/contentItem";
import { ProjectList } from "@/lib/api/model/project";

const PLATFORM_MAP: Record<string, Platform> = {
  FACEBOOK: "facebook",
  INSTAGRAM: "instagram",
  THREADS: "threads",
};

const PLATFORM_ORDER: Platform[] = ["instagram", "threads", "facebook"];

interface ContentItemProps {
  project: ProjectList;
  onClick?: (projectId: number) => void;
}

const ContentItem = ({ project, onClick }: ContentItemProps) => {
  const toggleState = useContentStore(state => state.activeTab);

  const formatted = useFormattedDateTime(project.earliestScheduledAt);
  const label = useDateLabel(project.earliestScheduledAt);

  const platforms = project.postingTypes
    .map(type => PLATFORM_MAP[type] ?? "facebook")
    .sort((a, b) => PLATFORM_ORDER.indexOf(a) - PLATFORM_ORDER.indexOf(b));

  return (
    <article
      onClick={() => onClick?.(project.projectId)}
      className={`w-full h-[105px] p-4 flex flex-col gap-[10px] rounded-[12px] bg-white shadow-drop ${onClick ? "cursor-pointer" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[48px] h-[26px] rounded-[4px] text-grayscale-600 text-b4M text-center border border-grayscale-300 bg-grayscale-100 flex items-center justify-center">
            게시글
          </div>
          <p className="truncate text-t3 text-grayscale-900">{project.projectTitle}</p>
        </div>
        <ChevronIcon type="right" className="text-grayscale-500" />
      </div>
      <div className="w-full h-[1px] bg-grayscale-300" />
      <div className="flex justify-between items-cetner">
        {toggleState === "recent" ? (
          <p className="text-b3R text-grayscale-600">{formatted}</p>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-1">
              <TimeIcon className="text-blue-700 w-5 h-5" />
              <p className="text-t4 text-blue-700">{label}</p>
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
