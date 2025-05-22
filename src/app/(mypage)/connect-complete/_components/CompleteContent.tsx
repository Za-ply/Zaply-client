"use client";

import { Button } from "@/components";
import SnsProfile from "../../mypage/_components/SnsProfile";
import { ArrowIcon } from "@/components/icons/service";
import { useRouter, useSearchParams } from "next/navigation";
import { Platforms } from "@/types/platform";
import { useSnsLinkStore } from "../../connect/_components/store/link-store";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { useAccounts } from "../../connect/_components/hooks/useAccounts";

export const CompleteContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { linkedStatus, accountInfo } = useSnsLinkStore();
  const { isLoading, isError } = useAccounts();

  const platformParam = searchParams.get("platform")?.toUpperCase() as
    | keyof typeof Platforms
    | undefined;

  if (!platformParam || !Platforms[platformParam]) {
    return (
      <section className="flex justify-center items-center min-h-screen">
        <p className="text-b2R text-red-600">플랫폼 정보를 찾을 수 없습니다.</p>
      </section>
    );
  }

  const currentPlatform = Platforms[platformParam] as SocialPlatform;

  if (isLoading) {
    return (
      <section className="flex justify-center items-center min-h-screen">
        <p className="text-b2R text-grayscale-700">연동 정보를 불러오고 있어요...</p>
      </section>
    );
  }

  if (isError || !linkedStatus[currentPlatform]) {
    return (
      <section className="flex justify-center items-center min-h-screen">
        <p className="text-b2R text-red-600">연동 정보를 불러오지 못했어요. 다시 시도해 주세요.</p>
      </section>
    );
  }

  return (
    <section className="pt-[194px] flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center gap-1">
        <SnsProfile type={currentPlatform} className="border-[2.8px] border-blue-700" />
        <p className="italic text-blue-700 text-b2M creato-500">@{accountInfo[currentPlatform]}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-h3 text-grayscale-900">계정이 연결되었어요!</p>
        <p className="text-b2R text-grayscale-700">재플리와 함께 계정을 성장시켜보세요.</p>
      </div>
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50 flex flex-col gap-3">
        <Button
          className="w-full"
          rightIcon={<ArrowIcon type="right" />}
          onClick={() => router.push("/connect")}>
          다른 계정 연결하기
        </Button>
        <Button className="w-full" variant="subAction" onClick={() => router.push("/mypage")}>
          닫기
        </Button>
      </div>
    </section>
  );
};

export default CompleteContent;
