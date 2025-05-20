import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Account, UserInfo } from "@/lib/api/model";

interface UserState {
  userInfo: UserInfo | null;
  accounts: Account[];
  setUserInfo: (userInfo: UserInfo) => void;
  setAccounts: (accounts: Account[]) => void;
  clearUserInfo: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    set => ({
      userInfo: null,
      accounts: [],
      setUserInfo: userInfo => set({ userInfo }),
      setAccounts: accounts => set({ accounts }),
      clearUserInfo: () => set({ userInfo: null, accounts: [] }),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
