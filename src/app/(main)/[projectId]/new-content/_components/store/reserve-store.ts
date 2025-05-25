import { create } from "zustand";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { Platforms } from "@/types/platform";

interface ReserveTime {
  date: Date | null;
  time: string | null;
}

interface ReserveState {
  isReserve: boolean | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  platformReserves: Record<SocialPlatform, ReserveTime>;
  currentPlatform: SocialPlatform | null;
  isAll: boolean;
  setIsReserve: (isReserve: boolean) => void;
  setSelectedDate: (date: Date | null) => void;
  setSelectedTime: (time: string | null) => void;
  setPlatformReserve: (platform: SocialPlatform, reserve: ReserveTime) => void;
  setCurrentPlatform: (platform: SocialPlatform | null) => void;
  setIsAll: (isAll: boolean) => void;
  clearReserve: () => void;
}

const initialPlatformReserves: Record<SocialPlatform, ReserveTime> = {
  [Platforms.FACEBOOK]: { date: null, time: null },
  [Platforms.THREADS]: { date: null, time: null },
  [Platforms.INSTAGRAM]: { date: null, time: null },
};

export const useReserveStore = create<ReserveState>(set => ({
  isReserve: null,
  selectedDate: null,
  selectedTime: null,
  platformReserves: initialPlatformReserves,
  currentPlatform: null,
  isAll: true,
  setIsReserve: isReserve => set({ isReserve }),
  setSelectedDate: date => set({ selectedDate: date }),
  setSelectedTime: time => set({ selectedTime: time }),
  setPlatformReserve: (platform, reserve) =>
    set(state => ({
      platformReserves: {
        ...state.platformReserves,
        [platform]: reserve,
      },
    })),
  setCurrentPlatform: platform => set({ currentPlatform: platform }),
  setIsAll: isAll => set({ isAll }),
  clearReserve: () =>
    set({
      selectedDate: null,
      selectedTime: null,
      isAll: false,
      platformReserves: initialPlatformReserves,
      currentPlatform: null,
    }),
}));
