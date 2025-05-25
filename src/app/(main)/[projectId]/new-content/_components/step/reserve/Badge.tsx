"use client";

import Image from "next/image";
import { instagramCircle, threadCircle, facebookCircle } from "@public/assets/images/sns";
import { Platforms } from "@/types/platform";
import { Skeleton } from "@/components";

interface BadgeProps {
  platform: Platforms;
}

const Badge = ({ platform }: BadgeProps) => {
  if (!platform) {
    return <Skeleton className="w-[72px] h-[32px]" />;
  }

  return (
    <div className="inline-flex items-center gap-2 px-2 py-1 border rounded border-grayscale-300">
      <Image
        src={
          platform === Platforms.INSTAGRAM
            ? instagramCircle
            : platform === Platforms.THREADS
              ? threadCircle
              : facebookCircle
        }
        alt={`SNS-${platform}`}
        width={20}
        height={20}
      />
      <p className="text-b4M text-grayscale-600">게시글</p>
    </div>
  );
};

export default Badge;
