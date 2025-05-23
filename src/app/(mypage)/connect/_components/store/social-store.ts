import { Platforms } from "@/types/platform";
import { create } from "zustand";

interface SelectedSocialState {
  selected: Platforms | null;
  setSelected: (name: Platforms) => void;
}

export const useSelectedSocialStore = create<SelectedSocialState>(set => ({
  selected: null,
  setSelected: name => set({ selected: name }),
}));
