import { Platforms } from "@/types/platform";
import { create } from "zustand";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";

interface SnsLinkState {
  linkedStatus: Record<SocialPlatform, boolean>;
  setLinked: (type: SocialPlatform, isLinked: boolean) => void;
}

export const useSnsLinkStore = create<SnsLinkState>(set => ({
  linkedStatus: {
    [Platforms.INSTAGRAM]: false,
    [Platforms.THREADS]: false,
    [Platforms.FACEBOOK]: false,
  },
  setLinked: (type, isLinked) =>
    set(state => ({
      linkedStatus: {
        ...state.linkedStatus,
        [type]: isLinked,
      },
    })),
}));
