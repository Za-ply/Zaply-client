import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Account, UserInfo } from "@/lib/api/model";

interface UserState {
  userInfo: UserInfo | null;
  accounts: Account[];
  setUserInfo: (userInfo: UserInfo) => void;
  setAccounts: (accounts: Account[]) => void;
  addAccount: (account: Account) => void;
  clearUserInfo: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    set => ({
      userInfo: null,
      accounts: [],
      setUserInfo: userInfo => set({ userInfo }),
      setAccounts: accounts => set({ accounts }),
      addAccount: account =>
        set(state => {
          const existing = state.accounts.find(a => a.snsType === account.snsType);
          const newAccounts = existing
            ? state.accounts.map(a =>
                a.snsType === account.snsType ? { ...a, accountName: account.accountName } : a
              )
            : [...state.accounts, account];

          return { accounts: newAccounts };
        }),
      clearUserInfo: () => set({ userInfo: null, accounts: [] }),
    }),
    { name: "user-storage" }
  )
);

export default useUserStore;
