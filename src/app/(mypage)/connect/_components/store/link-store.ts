import { Platforms } from "@/types/platform";
import { create } from "zustand";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { useQueryClient } from "@tanstack/react-query";
import { ACCOUNTS_QUERY_KEY } from "../hooks/useAccounts";

interface SnsLinkState {
  linkedStatus: Record<SocialPlatform, boolean>;
  accountInfo: Record<SocialPlatform, string>;
  isInitialized: boolean;
  setLinked: (type: SocialPlatform, isLinked: boolean) => void;
  initializeLinkedStatus: (data: {
    linkedStatus: Record<SocialPlatform, boolean>;
    accountInfo: Record<SocialPlatform, string>;
  }) => void;
  updateLinkedStatus: (platform: SocialPlatform, accountName?: string) => void;
}

export const useSnsLinkStore = create<SnsLinkState>(set => ({
  linkedStatus: {
    [Platforms.INSTAGRAM]: false,
    [Platforms.THREADS]: false,
    [Platforms.FACEBOOK]: false,
  },
  accountInfo: {
    [Platforms.INSTAGRAM]: "",
    [Platforms.THREADS]: "",
    [Platforms.FACEBOOK]: "",
  },
  isInitialized: false,
  setLinked: (type, isLinked) =>
    set(state => ({
      linkedStatus: {
        ...state.linkedStatus,
        [type]: isLinked,
      },
    })),
  initializeLinkedStatus: data => {
    set({
      linkedStatus: data.linkedStatus,
      accountInfo: data.accountInfo,
      isInitialized: true,
    });
  },
  updateLinkedStatus: (platform, accountName) =>
    set(state => ({
      linkedStatus: {
        ...state.linkedStatus,
        [platform]: true,
      },
      accountInfo: {
        ...state.accountInfo,
        [platform]: accountName || "",
      },
    })),
}));

export const useUpdateLinkedStatus = () => {
  const queryClient = useQueryClient();
  const { updateLinkedStatus } = useSnsLinkStore();

  return (platform: SocialPlatform, accountName?: string) => {
    updateLinkedStatus(platform, accountName);

    queryClient.setQueryData(ACCOUNTS_QUERY_KEY, (oldData: any) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        linkedStatus: {
          ...oldData.linkedStatus,
          [platform]: true,
        },
        accountInfo: {
          ...oldData.accountInfo,
          [platform]: accountName || "",
        },
      };
    });
  };
};
