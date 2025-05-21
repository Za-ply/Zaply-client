// stores/uploadScheduleStore.ts
import { create } from "zustand";

interface UploadScheduleState {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
}

export const useUploadScheduleStore = create<UploadScheduleState>(set => ({
  isVisible: false,
  show: () => set({ isVisible: true }),
  hide: () => set({ isVisible: false }),
}));
