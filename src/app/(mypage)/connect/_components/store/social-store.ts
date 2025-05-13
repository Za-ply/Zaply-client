import { create } from "zustand";

type Social = "Instagram" | "Facebook" | "Thread" | null;

interface SelectedSocialState {
  selected: Social;
  setSelected: (name: Social) => void;
}

export const useSelectedSocialStore = create<SelectedSocialState>(set => ({
  selected: null,
  setSelected: name => set({ selected: name }),
}));
