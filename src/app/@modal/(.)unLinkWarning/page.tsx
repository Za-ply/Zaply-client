"use client";

import { Modal } from "@/components";
import { DangerIcon } from "@/components/icons/service";
import { useRouter, useSearchParams } from "next/navigation";
import accountService from "@/lib/api/service/AccountService";
import { SnsType } from "@/lib/api/model";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";
import { useSnsLinkStore } from "@/app/(mypage)/connect/_components/store/link-store";
import { Platforms } from "@/types/platform";

const platformToSnsTypeMap: Record<SocialPlatform, SnsType> = {
  [Platforms.THREADS]: "THREADS",
  [Platforms.INSTAGRAM]: "INSTAGRAM",
  [Platforms.FACEBOOK]: "FACEBOOK",
};

const UnLinkWarning = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const param = searchParams.get("platform");

  const platform = Platforms[param?.toUpperCase() as keyof typeof Platforms] as SocialPlatform;
  console.log(platform);

  const { setLinked } = useSnsLinkStore();

  const handleStop = () => {
    router.back();
    setTimeout(() => {
      router.replace("/main");
      router.refresh();
    }, 10);
  };

  const handleUnlink = async () => {
    try {
      const snsType = platformToSnsTypeMap[platform];
      const response = await accountService.unlink(snsType);

      if (response.result === "SUCCESS") {
        setLinked(platform, "");
        router.back();
        router.back();
        router.refresh();
        router.push("/mypage");
      }
    } catch (error) {
      console.error("Failed to unlink account:", error);
    }
  };

  return (
    <Modal
      isOpen={true}
      title=""
      description=""
      onCloseIconClick={() => router.back()}
      onLeftButtonClick={handleUnlink}
      onRightButtonClick={handleStop}
      buttonType="multi"
      leftText="연결 끊기"
      rightText="그만 두기">
      <div className="flex flex-col items-center gap-4">
        <DangerIcon className="text-redscale-700" width={40} height={40} />
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-t2 text-grayscale-900">계정 연결을 끊을까요?</p>
          <p className="text-b2M text-grayscale-600 text-center">
            지금까지 재플리를 통해 발행한 해당 계정의 콘텐츠 인사이트 및 댓글 관리 페이지는 모두
            초기화됩니다. 계정은 언제든지 다시 연결할 수 있습니다. 연결을 끊고 모든 기록을
            삭제하시겠습니까?
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default UnLinkWarning;
