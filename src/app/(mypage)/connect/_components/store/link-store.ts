import { create } from "zustand";

export type SnsType = "instagram" | "thread" | "facebook";

interface SnsLinkState {
  linkedStatus: Record<SnsType, boolean>;
  setLinked: (type: SnsType, isLinked: boolean) => void;
}

export const useSnsLinkStore = create<SnsLinkState>(set => ({
  linkedStatus: {
    instagram: false,
    thread: false,
    facebook: false,
  },
  setLinked: (type, isLinked) =>
    set(state => ({
      linkedStatus: {
        ...state.linkedStatus,
        [type]: isLinked,
      },
    })),
}));
