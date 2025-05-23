import { create } from "zustand";

// 추후에 스토어 -> props로 내려주는 방향으로 수정하기
type Tab = "reserved" | "recent";

interface ContentStore {
  activeTab: Tab;
  counts: { reserved: number; recent: number };
  setActiveTab: (tab: Tab) => void;
  setCounts: (counts: { reserved: number; recent: number }) => void;
}

export const useContentStore = create<ContentStore>(set => ({
  activeTab: "reserved",
  counts: { reserved: 0, recent: 0 },
  setActiveTab: tab => set({ activeTab: tab }),
  setCounts: counts => set({ counts }),
}));
