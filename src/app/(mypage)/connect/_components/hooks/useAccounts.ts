import { useQuery } from "@tanstack/react-query";
import memberService from "@/lib/api/service/MemberService";
import useUserStore from "@/stores/userStore";

export const ACCOUNTS_QUERY_KEY = ["accounts"] as const;

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
