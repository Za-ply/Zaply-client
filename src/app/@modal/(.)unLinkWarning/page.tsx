"use client";

import { Modal } from "@/components";
import { DangerIcon } from "@/components/icons/service";
import { useRouter } from "next/navigation";

const UnLinkWarning = () => {
  const router = useRouter();

  const handleStop = () => {
    router.back();
    setTimeout(() => {
      router.replace("/main");
      router.refresh();
    }, 10);
  };

  // 연결 끊기는 api 연결
  return (
    <Modal
      isOpen={true}
      title=""
      description=""
      onCloseIconClick={() => router.back()}
      onLeftButtonClick={() => null}
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
