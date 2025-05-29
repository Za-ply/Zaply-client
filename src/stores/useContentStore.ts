import { create } from "zustand";
import { ProjectList } from "@/lib/api/model/project";

// 추후에 스토어 -> props로 내려주는 방향으로 수정하기
type Tab = "reserved" | "recent";

interface ContentStore {
  activeTab: Tab;
  projects: ProjectList[];
  counts: { reserved: number; recent: number };
  setProjects: (projects: ProjectList[]) => void;
  setActiveTab: (tab: Tab) => void;
  setCounts: (counts: { reserved: number; recent: number }) => void;
}

export const useContentStore = create<ContentStore>(set => ({
  activeTab: "recent",
  projects: [],
  counts: { reserved: 0, recent: 0 },
  setProjects: projects => set({ projects }),
  setActiveTab: tab => set({ activeTab: tab }),
  setCounts: counts => set({ counts }),
}));
