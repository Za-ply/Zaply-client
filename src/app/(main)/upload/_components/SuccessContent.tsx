"use client";

import { useRouter } from "next/navigation";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import SnsProfile from "@/app/(mypage)/mypage/_components/SnsProfile";
import { ArrowIcon, Button, CircleCheckIcon } from "@/components";
import useUserStore from "@/stores/userStore";
import { Platforms } from "@/types/platform";
import { useSNSTransferStore } from "../../[projectId]/new-content/_components/store/sns-transfer-store";

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  FACEBOOK: Platforms.FACEBOOK,
  THREADS: Platforms.THREADS,
  INSTAGRAM: Platforms.INSTAGRAM,
} as const;

export const SuccessContent = () => {
  const router = useRouter();
  const { snsTransferRequest } = useSNSTransferStore.getState();

  const linkedPlatforms: SocialPlatform[] = Array.from(
    new Set(
      snsTransferRequest
        .flatMap(req => req.snsTypes)
        .filter(sns => snsTypeToPlatform[sns])
        .map(sns => snsTypeToPlatform[sns])
    )
  );

  return (
    <div className="flex flex-col flex-1 min-h-real-screen">
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <CircleCheckIcon className="w-10 h-10 text-blue-700" />
        <h1 className="text-h2 leading-[140%] text-blue-blueblack text-center">
          성공적으로
          <br />
          업로드 되었어요!
        </h1>
        <div className="flex items-center gap-3">
          {linkedPlatforms.map(platform => (
            <SnsProfile type={platform} key={platform} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-3 mb-[60px]">
        <Button
          className="w-full text-button1 text-grayscale-100"
          rightIcon={<ArrowIcon type="right" />}>
          업로드 확인하기
        </Button>
        <Button
          variant="subAction"
          className="w-full text-button1 text-blue-700"
          onClick={() => router.push("/main")}>
          HOME으로
        </Button>
      </div>
    </div>
  );
};

export default SuccessContent;
