import { useQuery } from "@tanstack/react-query";
import { Platforms } from "@/types/platform";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import memberService from "@/lib/api/service/MemberService";
import useUserStore from "@/stores/userStore";
import { SnsType } from "@/lib/api/model/member";

export const ACCOUNTS_QUERY_KEY = ["accounts"] as const;

const snsTypeToPlatform: Record<SnsType, SocialPlatform> = {
  FACEBOOK: Platforms.FACEBOOK,
  THREADS: Platforms.THREADS,
  INSTAGRAM: Platforms.INSTAGRAM,
};

export const useAccounts = () => {
  const setAccounts = useUserStore(state => state.setAccounts);

  const query = useQuery({
    queryKey: ACCOUNTS_QUERY_KEY,
    queryFn: async () => {
      const response = await memberService.getAccounts();
      if (response.result !== "SUCCESS") {
        throw new Error("Failed to fetch accounts");
      }

      const accounts = response.data.accounts;
      setAccounts(accounts);

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
