import { Category, Platforms } from "@/types/platform";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PlatformState {
  selectedPlatform: Platforms | null;
  selectedCategory: Category | null;
  setSelectedPlatform: (platform: Platforms) => void;
  setSelectedCategory: (category: Category) => void;
  reset: () => void;
}

export const usePlatformStore = create<PlatformState>()(
  persist(
    (set, get) => ({
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
      reset: () => {
        set({ selectedPlatform: null, selectedCategory: null });
      },
    }),
    {
      name: "platform-storage",
      partialize: state => ({
        selectedPlatform: state.selectedPlatform,
        selectedCategory: state.selectedCategory,
      }),
    }
  )
);
