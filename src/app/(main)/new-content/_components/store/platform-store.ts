import { Category, Platforms } from "@/types/platform";
import { create } from "zustand";

interface PlatformState {
  selectedPlatform: Platforms | null;
  selectedCategory: Category | null;
  setSelectedPlatform: (platform: Platforms) => void;
  setSelectedCategory: (category: Category) => void;
}

export const usePlatformStore = create<PlatformState>((set, get) => ({
  selectedPlatform: null,
  selectedCategory: null,
  setSelectedPlatform: (platform: Platforms) => {
    const prevPlatform = get().selectedPlatform;
    if (prevPlatform === platform) {
      set({ selectedPlatform: null, selectedCategory: null });
    } else {
      set({ selectedPlatform: platform, selectedCategory: Category.POST });
    }
  },
  setSelectedCategory: (category: Category) => {
    set({ selectedCategory: category });
  },
}));
