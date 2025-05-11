import { create } from "zustand";

type TabType = "reserved" | "recent";

interface ContentStore {
  activeTab: TabType;
  counts: { reserved: number; recent: number };
  setActiveTab: (tab: TabType) => void;
  setCounts: (counts: { reserved: number; recent: number }) => void;
}

export const useContentStore = create<ContentStore>(set => ({
  activeTab: "reserved",
  counts: { reserved: 0, recent: 0 },
  setActiveTab: tab => set({ activeTab: tab }),
  setCounts: counts => set({ counts }),
}));
