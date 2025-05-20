import { Platforms } from "@/types/platform";
import { create } from "zustand";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";

interface SnsLinkState {
  linkedStatus: Record<SocialPlatform, boolean>;
  accountInfo: Record<SocialPlatform, string>;
  setLinked: (platform: SocialPlatform, accountName: string) => void;
}

const initialState = {
  linkedStatus: {
    [Platforms.INSTAGRAM]: false,
    [Platforms.THREADS]: false,
    [Platforms.FACEBOOK]: false,
  },
  accountInfo: {
    [Platforms.INSTAGRAM]: "",
    [Platforms.THREADS]: "",
    [Platforms.FACEBOOK]: "",
  },
};

export const useSnsLinkStore = create<SnsLinkState>(set => ({
  ...initialState,
  setLinked: (platform, accountName) => ({
    linkedStatus: {
      ...initialState.linkedStatus,
      [platform]: true,
    },
    accountInfo: {
      ...initialState.accountInfo,
      [platform]: accountName,
    },
  }),
}));
