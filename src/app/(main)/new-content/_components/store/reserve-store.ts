import { create } from "zustand";

interface ReserveState {
  selectedDate: Date | null;
  selectedTime: string | null;
  setSelectedDate: (date: Date | null) => void;
  setSelectedTime: (time: string | null) => void;
  clearReserve: () => void;
}

export const useReserveStore = create<ReserveState>(set => ({
  selectedDate: null,
  selectedTime: null,
  setSelectedDate: date => set({ selectedDate: date }),
  setSelectedTime: time => set({ selectedTime: time }),
  clearReserve: () => set({ selectedDate: null, selectedTime: null }),
}));
