"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SnsProfile from "../../mypage/_components/SnsProfile";
import { Platforms } from "@/types/platform";
import { useCallback } from "react";
import { SocialPlatform } from "../../_components/types/platform";
import useUserStore from "@/stores/userStore";
import { SnsType } from "@/lib/api/model/member";

const platformAliasMap: Record<string, SocialPlatform> = {
  insta: Platforms.INSTAGRAM,
  instagram: Platforms.INSTAGRAM,
  facebook: Platforms.FACEBOOK,
  thread: Platforms.THREADS,
  threads: Platforms.THREADS,
};

const platformToSnsType: Record<SocialPlatform, SnsType> = {
  [Platforms.INSTAGRAM]: "INSTAGRAM",
  [Platforms.THREADS]: "THREADS",
  [Platforms.FACEBOOK]: "FACEBOOK",
};

const SocialUnLinked = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accounts = useUserStore(state => state.accounts);
  const platformParam = searchParams.get("platform")?.toLowerCase();

  const platformKey = platformAliasMap[platformParam ?? ""];
  const account = accounts.find(acc => acc.snsType === platformToSnsType[platformKey]);

  const handleUnlink = useCallback(() => {
    if (platformKey === Platforms.THREADS) {
      router.push(`/unLinkWarning?platform=THREADS`);
    } else {
      router.push(`/unLinkWarning?platform=${platformKey}`);
    }
  }, [router, platformKey]);

  if (!platformKey) {
    return <div className="text-center text-red-500 text-b3M mt-10"></div>;
  }

  const formatDate = (isoDateString: string | undefined) => {
    if (!isoDateString) return "";
    const date = new Date(isoDateString);
    const year = String(date.getFullYear()).slice(2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  return (
    <section className="pt-[85px] flex flex-col gap-8">
      <div className="flex gap-3">
        <SnsProfile type={platformKey} />
        <div className="flex flex-col gap-[2px]">
          <p className="text-b2M text-grayscale-900">@{account?.accountName}</p>
          <p className={"text-b4R text-grayscale-600"}>비즈니스 계정</p>
        </div>
      </div>
      <div className="w-full border border-grayscale-300 rounded-[4px] px-4 py-3 flex items-center justify-between">
        <p className="text-b4R text-grayscale-700">
          {account?.linkedAt ? `${formatDate(account.linkedAt)}부터 연결됨` : ""}
        </p>
        <p className="text-b3M text-redscale-700 cursor-pointer" onClick={handleUnlink}>
          계정 연결 끊기
        </p>
      </div>
    </section>
  );
};

export default SocialUnLinked;
