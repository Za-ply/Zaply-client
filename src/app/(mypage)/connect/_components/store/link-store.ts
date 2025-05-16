import { Platforms } from "@/types/platform";
import { create } from "zustand";

interface SnsLinkState {
  linkedStatus: Record<Platforms, boolean>;
  setLinked: (type: Platforms, isLinked: boolean) => void;
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
