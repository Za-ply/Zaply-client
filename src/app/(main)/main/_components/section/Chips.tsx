import { ViewIcon, HeartIcon, FollowersIcon } from "@/components/icons";
import { ChipType } from "../constants/chips";
import { formatNumberWithComma } from "@/utils/useFormatCount";

interface ChipsProps {
  type?: ChipType;
  month: number;
  counts: Record<ChipType, number>;
}

const Chips = ({ type = "default", month = 5, counts }: ChipsProps) => {
  const iconMap = {
    default: <ViewIcon className="text-grayscale-200 w-5" />,
    like: <HeartIcon className="text-grayscale-200 w-5 h-5" />,
    follow: <FollowersIcon className="text-grayscale-200 w-5 h-5" />,
  };

  const labelMap = {
    default: (
      <>
        {month}월 누적 <span className="text-b3M text-blue-700">조회수</span>
      </>
    ),
    like: (
      <>
        {month}월 누적 <span className="text-b3M text-blue-700">좋아요</span>
      </>
    ),
    follow: (
      <>
        {month}월 누적 <span className="text-b3M text-blue-700">팔로우</span>
      </>
    ),
  };

  return (
    <div className="h-[34px] p-[6px] bg-grayscale-900 rounded-full flex items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-1">
        {iconMap[type]}
        <p className="text-b3M text-grayscale-200">{labelMap[type]}</p>
      </div>
      <div className="bg-grayscale-800 rounded-full px-2 py-[2px] text-b4M text-blue-700">
        + {formatNumberWithComma(counts[type])}
      </div>
    </div>
  );
};

export default Chips;
