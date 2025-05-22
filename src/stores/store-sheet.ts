import { create } from "zustand";

interface SheetState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const createSheetStore = () =>
  create<SheetState>(set => ({
    isOpen: false,
    setIsOpen: isOpen => set({ isOpen }),
  }));

export { createSheetStore };
export type { SheetState };
