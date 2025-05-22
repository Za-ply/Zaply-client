import { create } from "zustand";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { Platforms } from "@/types/platform";

interface ReserveTime {
  date: Date | null;
  time: string | null;
}

interface ReserveState {
  selectedDate: Date | null;
  selectedTime: string | null;
  isAll: boolean;
  platformReserves: Record<SocialPlatform, ReserveTime>;
  currentPlatform: SocialPlatform | null;
  setSelectedDate: (date: Date | null) => void;
  setSelectedTime: (time: string | null) => void;
  setIsAll: (isAll: boolean) => void;
  setPlatformReserve: (platform: SocialPlatform, reserve: ReserveTime) => void;
  setCurrentPlatform: (platform: SocialPlatform | null) => void;
  clearReserve: () => void;
}

const initialPlatformReserves: Record<SocialPlatform, ReserveTime> = {
  [Platforms.FACEBOOK]: { date: null, time: null },
  [Platforms.THREADS]: { date: null, time: null },
  [Platforms.INSTAGRAM]: { date: null, time: null },
};

export const useReserveStore = create<ReserveState>(set => ({
  selectedDate: null,
  selectedTime: null,
  isAll: true,
  platformReserves: initialPlatformReserves,
  currentPlatform: null,
  setSelectedDate: date => set({ selectedDate: date }),
  setSelectedTime: time => set({ selectedTime: time }),
  setIsAll: isAll => set({ isAll }),
  setPlatformReserve: (platform, reserve) =>
    set(state => ({
      platformReserves: {
        ...state.platformReserves,
        [platform]: reserve,
      },
    })),
  setCurrentPlatform: platform => set({ currentPlatform: platform }),
  clearReserve: () =>
    set({
      selectedDate: null,
      selectedTime: null,
      isAll: false,
      platformReserves: initialPlatformReserves,
      currentPlatform: null,
    }),
}));
