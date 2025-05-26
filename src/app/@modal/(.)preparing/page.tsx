"use client";
import { DangerIcon, Modal } from "@/components";
import { useRouter } from "next/navigation";

const PreparingModal = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
    setTimeout(() => {
      router.refresh();
    }, 1000);
  };

  return (
    <Modal
      isOpen={true}
      title=""
      description=""
      onCloseIconClick={handleClose}
      onRightButtonClick={handleClose}
      buttonType="single"
      rightText="메인으로"
      overlayClassName="bg-grayscale-900/60">
      <div className="flex flex-col items-center gap-4">
        <DangerIcon className="text-redscale-700" width={40} height={40} />
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-t2 text-grayscale-900">아직 준비중인 기능이에요🥹</p>
          <p className="text-b2M text-grayscale-600">조금만 기다려주세요!</p>
        </div>
      </div>
    </Modal>
  );
};

export default PreparingModal;
