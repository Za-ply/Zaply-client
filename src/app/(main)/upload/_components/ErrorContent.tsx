"use client";

import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import SnsProfile from "@/app/(mypage)/mypage/_components/SnsProfile";
import { ArrowIcon, Button, DangerIcon } from "@/components";
import useUserStore from "@/stores/userStore";
import { Platforms } from "@/types/platform";

const snsTypeToPlatform: Record<string, SocialPlatform> = {
  FACEBOOK: Platforms.FACEBOOK,
  THREADS: Platforms.THREADS,
  INSTAGRAM: Platforms.INSTAGRAM,
} as const;

export const ErrorContent = () => {
  const accounts = useUserStore(state => state.accounts);
  const linkedPlatforms = accounts
    .map(account => snsTypeToPlatform[account.snsType])
    .filter(Boolean);

  return (
    <div className="flex flex-col flex-1 min-h-real-screen">
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <DangerIcon className="w-10 h-10 text-redscale-700" />
        <div className="flex flex-col gap-2">
          <h1 className="text-h2 leading-[140%] text-blue-blueblack text-center">
            다시 시도해주세요.
          </h1>
          <p className="text-b2M text-grayscale-700 text-center">
            일부 계정에서 오류가 생겨
            <br />
            업로드를 실패했어요.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {linkedPlatforms.map(platform => (
            <SnsProfile type={platform} key={platform} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 mb-[60px]">
        <p className="text-b2M text-grayscale-600 underline text-center cursor-pointer">
          오류가 반복되고 있나요?
        </p>
        <div className="w-full flex flex-col gap-3 ">
          <Button
            className="w-full text-button1 text-grayscale-100"
            rightIcon={<ArrowIcon type="right" />}>
            다시 시도하기
          </Button>
          <Button variant="subAction" className="w-full text-button1 text-blue-700">
            HOME으로
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorContent;
