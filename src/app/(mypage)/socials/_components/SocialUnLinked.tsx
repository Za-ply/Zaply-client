"use client";

import { useSearchParams } from "next/navigation";
import SnsProfile from "../../mypage/_components/SnsProfile";
import { Platforms } from "@/types/platform";

const SocialUnLinked = () => {
  const searchParams = useSearchParams();
  const platformParam = searchParams.get("platform")?.toLowerCase();

  const platformAliasMap: Record<string, Platforms> = {
    insta: Platforms.INSTAGRAM,
    instagram: Platforms.INSTAGRAM,
    facebook: Platforms.FACEBOOK,
    thread: Platforms.THREADS,
    threads: Platforms.THREADS,
  };

  const platformKey = platformAliasMap[platformParam ?? ""];

  if (!platformKey) {
    return (
      <div className="text-center text-red-500 text-b3M mt-10">유효하지 않은 플랫폼입니다.</div>
    );
  }

  return (
    <section className="pt-[85px] flex flex-col gap-8">
      <div className="flex gap-3">
        <SnsProfile type={platformKey} />
        <div className="flex flex-col gap-[2px]">
          <p className="text-b2M text-grayscale-900">@username</p>
          <p className={"text-b4R text-grayscale-600"}>비즈니스 계정</p>
        </div>
      </div>
      <div className="w-full border border-grayscale-300 rounded-[4px] px-4 py-3 flex items-center justify-between">
        <p className="text-b4R text-grayscale-700">25/05/08부터 연결됨</p>
        <p className="text-b3M text-redscale-700 cursor-pointer">계정 연결 끊기</p>
      </div>
    </section>
  );
};

export default SocialUnLinked;
