import { useQuery } from "@tanstack/react-query";
import { Platforms } from "@/types/platform";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { useSnsLinkStore } from "../store/link-store";
import memberService from "@/lib/api/service/MemberService";

export const ACCOUNTS_QUERY_KEY = ["accounts"] as const;

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  FACEBOOK: Platforms.FACEBOOK,
  THREADS: Platforms.THREADS,
  INSTAGRAM: Platforms.INSTAGRAM,
};

export const useAccounts = () => {
  const setLinked = useSnsLinkStore(state => state.setLinked);

  const query = useQuery({
    queryKey: ACCOUNTS_QUERY_KEY,
    queryFn: async () => {
      const response = await memberService.getAccounts();
      if (response.result !== "SUCCESS") {
        throw new Error("Failed to fetch accounts");
      }

      const accounts = response.data.accounts;

      accounts.forEach(account => {
        const platform = snsTypeToPlatform[account.snsType];
        if (platform) {
          setLinked(platform, account.accountName);
        }
      });

      return accounts;
    },
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
    data: query.data,
  };
};
