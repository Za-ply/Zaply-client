"use client";

import { Modal } from "@/components/common/modal";
import { useRouter } from "next/navigation";

const TestModal = () => {
  const router = useRouter();
  return (
    <Modal
      isOpen={true}
      title="모달 제목"
      description="모달 설명"
      onCloseIconClick={() => router.back()}
      onLeftButtonClick={() => router.back()}
      buttonType="multi"
      leftText="취소"
      rightText="확인">
      <div>모달 테스트</div>
    </Modal>
  );
};

export default TestModal;
