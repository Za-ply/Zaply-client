import { useQuery } from "@tanstack/react-query";
import authService from "@/lib/api/service/AuthService";
import { Platforms } from "@/types/platform";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";

export const ACCOUNTS_QUERY_KEY = ["accounts"] as const;

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  FACEBOOK: Platforms.FACEBOOK,
  THREADS: Platforms.THREADS,
  INSTAGRAM: Platforms.INSTAGRAM,
};

export const useAccounts = () => {
  return useQuery({
    queryKey: ACCOUNTS_QUERY_KEY,
    queryFn: async () => {
      const response = await authService.getAccounts();
      if (response.result === "SUCCESS") {
        const newStatus = {
          [Platforms.INSTAGRAM]: false,
          [Platforms.THREADS]: false,
          [Platforms.FACEBOOK]: false,
        };
        const newAccountInfo = {
          [Platforms.INSTAGRAM]: "",
          [Platforms.THREADS]: "",
          [Platforms.FACEBOOK]: "",
        };

        response.data.accounts.forEach(account => {
          const platform = snsTypeToPlatform[account.snsType];
          if (platform) {
            newStatus[platform] = true;
            newAccountInfo[platform] = account.accountName;
          }
        });

        return {
          linkedStatus: newStatus,
          accountInfo: newAccountInfo,
        };
      }
      throw new Error("Failed to fetch accounts");
    },
  });
};
