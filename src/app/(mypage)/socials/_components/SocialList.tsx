"use client";

import { useRouter } from "next/navigation";
import { ChevronIcon } from "@/components/icons";
import SnsProfile from "../../mypage/_components/SnsProfile";
import { Platforms } from "@/types/platform";
import { useCallback } from "react";
import useUserStore from "@/stores/userStore";
import { SnsType } from "@/lib/api/model/member";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";

const snsList = [
  {
    name: "Instagram",
    type: Platforms.INSTAGRAM,
  },
  {
    name: "Thread",
    type: Platforms.THREADS,
  },
  {
    name: "Facebook",
    type: Platforms.FACEBOOK,
  },
] as const;

const platformToSnsType: Record<SocialPlatform, SnsType> = {
  [Platforms.INSTAGRAM]: "INSTAGRAM",
  [Platforms.THREADS]: "THREADS",
  [Platforms.FACEBOOK]: "FACEBOOK",
};

const SocialList = () => {
  const router = useRouter();
  const accounts = useUserStore(state => state.accounts);

  const handleClick = useCallback(
    (isLinked: boolean, type: Platforms) => {
      const path = isLinked
        ? `/socials/unlinked?platform=${type}`
        : `/socials/info?platform=${type}`;
      router.push(path);
    },
    [router]
  );

  return (
    <section className="pt-[92px] w-full flex flex-col gap-3">
      {snsList.map(({ name, type }, index) => {
        const isLast = index === snsList.length - 1;
        const isLinked = accounts.some(acc => acc.snsType === platformToSnsType[type]);
        const account = accounts.find(acc => acc.snsType === platformToSnsType[type]);

        return (
          <div
            key={type}
            onClick={() => handleClick(isLinked, type)}
            className={`w-full flex items-center justify-between pb-3 cursor-pointer ${
              !isLast ? "border-b border-grayscale-grayscale-200" : ""
            }`}>
            <div className="flex gap-3">
              <SnsProfile type={type} />
              <div className="flex flex-col gap-[2px]">
                <p className="text-b2M text-grayscale-900">
                  {isLinked ? `@${account?.accountName}` : name}
                </p>
                <p className={`text-b4R ${isLinked ? "text-grayscale-600" : "text-blue-700"}`}>
                  {isLinked ? "비즈니스 계정" : "연결 필요"}
                </p>
              </div>
            </div>
            <ChevronIcon type="right" className="text-grayscale-600" />
          </div>
        );
      })}
    </section>
  );
};

export default SocialList;
