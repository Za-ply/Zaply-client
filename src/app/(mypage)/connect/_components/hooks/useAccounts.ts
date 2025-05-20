import { useEffect, useState } from "react";
import { Platforms } from "@/types/platform";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { useSnsLinkStore } from "../store/link-store";
import memberService from "@/lib/api/service/MemberService";

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  FACEBOOK: Platforms.FACEBOOK,
  THREADS: Platforms.THREADS,
  INSTAGRAM: Platforms.INSTAGRAM,
};

interface UseAccountsResult {
  isLoading: boolean;
  isError: boolean;
}

export const useAccounts = (): UseAccountsResult => {
  const setLinked = useSnsLinkStore(state => state.setLinked);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await memberService.getAccounts();
        if (response.result === "SUCCESS") {
          response.data.accounts.forEach(account => {
            const platform = snsTypeToPlatform[account.snsType];
            if (platform) {
              setLinked(platform, account.accountName);
            }
          });
          setIsLoading(false);
        } else {
          throw new Error("Account fetch failed");
        }
      } catch (err) {
        console.error("Failed to fetch accounts", err);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchAccounts();
  }, [setLinked]);

  return { isLoading, isError };
};
