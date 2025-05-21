import { Platforms } from "@/types/platform";
import { create } from "zustand";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { persist } from "zustand/middleware";

interface SnsLinkState {
  linkedStatus: Record<SocialPlatform, boolean>;
  accountInfo: Record<SocialPlatform, string>;
  setLinked: (platform: SocialPlatform, accountName: string) => void;
  clearLink: () => void;
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

export const useSnsLinkStore = create<SnsLinkState>()(
  persist(
    set => ({
      ...initialState,
      setLinked: (platform, accountName) =>
        set(state => ({
          linkedStatus: {
            ...state.linkedStatus,
            [platform]: !!accountName,
          },
          accountInfo: {
            ...state.accountInfo,
            [platform]: accountName,
          },
        })),
      clearLink: () => set(initialState),
    }),
    {
      name: "sns-link-storage",
    }
  )
);
