"use client";

import { usePlatformStore } from "@/app/(main)/new-content/_components/store/platform-store";
import { Modal } from "@/components";
import { DangerIcon } from "@/components/icons";
import { useRouter } from "next/navigation";

const WarningModal = () => {
  const router = useRouter();
  const { reset } = usePlatformStore();

  const handleStop = () => {
    reset();
    router.back();
    setTimeout(() => {
      router.push("/main");
    }, 100);
  };

  return (
    <Modal
      isOpen={true}
      title=""
      description=""
      onCloseIconClick={() => router.back()}
      onLeftButtonClick={() => router.back()}
      onRightButtonClick={handleStop}
      buttonType="multi"
      leftText="계속 작성하기"
      rightText="그만두기">
      <div className="flex flex-col items-center gap-4">
        <DangerIcon className="text-redscale-700" width={40} height={40} />
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-t2 text-grayscale-900">새 콘텐츠 생성을 그만둘까요?</p>
          <p className="text-b2M text-grayscale-600">입력된 내용들은 모두 초기화됩니다.</p>
        </div>
      </div>
    </Modal>
  );
};

export default WarningModal;
