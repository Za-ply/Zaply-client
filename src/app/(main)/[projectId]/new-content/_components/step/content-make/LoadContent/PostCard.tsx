import Image from "next/image";
import { CircleCheckBoldIcon, CircleIcon, Skeleton } from "@/components";
import { cn } from "@/utils";
import { useFormatDate } from "@/utils/useFormatDate";
import { SNSPostingContent } from "@/lib/api/model/posting";
import DefaultImage from "@public/assets/images/default.png";

interface PostCardProps {
  post: SNSPostingContent;
  isSelected: boolean;
  onSelect: (post: SNSPostingContent | null) => void;
  viewType: "vertical" | "gallery";
}

const PostCard = ({ post, isSelected, onSelect, viewType }: PostCardProps) => {
  return viewType === "vertical" ? (
    <div
      className={`min-w-[379px] py-[10px] pr-3 pl-5 h-[88px] flex items-start justify-between gap-3 
        transition-colors duration-200 ease-in-out cursor-pointer
        ${isSelected ? "bg-blue-100" : ""}`}
      onClick={e => {
        e.stopPropagation();
        if (isSelected) {
          onSelect(null);
        } else {
          onSelect(post);
        }
      }}>
      <div className="relative">
        <Image
          src={post.postingImages[0] ?? DefaultImage}
          alt="post-image"
          width={68}
          height={68}
          placeholder="blur"
          blurDataURL={"/assets/images/blur.png"}
          className="rounded-[2px] transition-transform duration-200 hover:scale-[1.02] w-[68px] h-[68px] object-cover"
        />
        {post.postingImages.length > 0 && (
          <p className="absolute top-2 right-[6px] px-[6px] rounded-[100px] bg-grayscale-700/60 text-b4R text-grayscale-100">
            +{post.postingImages.length}
          </p>
        )}
      </div>
      <div className="flex flex-col items-start justify-between gap-2 min-w-[235px] w-[calc(100%-112px)] h-[68px]">
        <p className="overflow-hidden whitespace-pre-wrap text-b3M text-grayscale-800 text-ellipsis line-clamp-2">
          {post.postingContent}
        </p>
        <p className="text-b4R text-grayscale-600">{useFormatDate(post.publishedAt)}</p>
      </div>
      <div>
        {isSelected ? (
          <CircleCheckBoldIcon className="text-blue-700" />
        ) : (
          <CircleIcon className="text-grayscale-300" />
        )}
      </div>
    </div>
  ) : (
    <div
      className={cn("relative w-full col-span-1", {
        "border-[3px] border-blue-700": isSelected,
        "border-[3px] border-transparent": !isSelected,
      })}
      onClick={e => {
        e.stopPropagation();
        if (isSelected) {
          onSelect(null);
        } else {
          onSelect(post);
        }
      }}>
      <Image
        src={post.postingImages[0] ?? DefaultImage}
        alt="post-image"
        width={112}
        height={112}
        placeholder="blur"
        blurDataURL={"/assets/images/blur.png"}
        className="w-[112px] h-[112px] object-cover"
      />
      <div className="absolute top-2 right-2">
        {isSelected ? (
          <CircleCheckBoldIcon className="text-blue-700" />
        ) : (
          <CircleIcon className="text-grayscale-300" />
        )}
      </div>
      {post.postingImages.length > 0 && (
        <p className="absolute bottom-2 right-2 px-[6px] rounded-[100px] bg-grayscale-700/60 text-b4R text-grayscale-100">
          +{post.postingImages.length}
        </p>
      )}
    </div>
  );
};

PostCard.Skeleton = ({ viewType }: { viewType: "vertical" | "gallery" }) => {
  return (
    <div className="w-full">
      {viewType === "vertical" ? (
        <Skeleton className="w-full h-[68px]" />
      ) : (
        <Skeleton className="w-[112px] h-[112px]" />
      )}
    </div>
  );
};

export default PostCard;
