"use client";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/utils";
import useUserStore from "@/stores/userStore";
import { Platforms } from "@/types/platform";
import {
  facebookCircle,
  facebookCircleMono,
  instagramCircle,
  instagramCircleMono,
  threadCircle,
  threadCircleMono,
} from "@public/assets/images/sns";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";

const snsMap: Record<SocialPlatform, { linked: StaticImageData; unlinked: StaticImageData }> = {
  [Platforms.INSTAGRAM]: {
    linked: instagramCircleMono,
    unlinked: instagramCircle,
  },
  [Platforms.THREADS]: {
    linked: threadCircleMono,
    unlinked: threadCircle,
  },
  [Platforms.FACEBOOK]: {
    linked: facebookCircleMono,
    unlinked: facebookCircle,
  },
};

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  INSTAGRAM: Platforms.INSTAGRAM,
  THREADS: Platforms.THREADS,
  FACEBOOK: Platforms.FACEBOOK,
};

export const SnsProfile = ({ type, className }: { type: SocialPlatform; className?: string }) => {
  const accounts = useUserStore(state => state.accounts);
  const icon = snsMap[type];

  const isLinked = accounts.some(account => {
    const platform = snsTypeToPlatform[account.snsType];
    return platform === type && account.accountName !== "";
  });

  if (!icon) {
    console.error(`Invalid social platform type: ${type}`);
    return null;
  }

  const shouldShowFullProfile = isLinked;

  return shouldShowFullProfile ? (
    <div className={cn("relative w-[48px] h-[48px] bg-grayscale-400 rounded-full", className)}>
      <Image
        src={icon.unlinked}
        width={20}
        height={20}
        alt={`${type} badge`}
        className="absolute bottom-[1px] right-[-3px]"
      />
    </div>
  ) : (
    <Image src={icon.linked} width={48} height={48} alt={`${type} icon`} className="rounded-full" />
  );
};

export default SnsProfile;
