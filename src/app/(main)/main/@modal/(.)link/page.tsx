"use client";

import { useRouter } from "next/navigation";
import { LinkIcon } from "@/components/icons";
import { Modal } from "@/components";

const LinkModal = () => {
  const router = useRouter();

  const handleMain = () => {
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
      leftText="다음에 하기"
      leftClassName="bg-grayscale-100 text-grayscale-500"
      rightText="계정 연결하기"
      buttonType="multi"
      buttonDirectionType="column"
      showCloseIcon={true}
      modalPosition="bottom"
      onCloseIconClick={handleMain}
      onLeftButtonClick={handleMain}
      onRightButtonClick={() => {
        router.replace("/connect");
        router.refresh();
      }}>
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-4">
          <LinkIcon className="w-10 h-10 text-green-700" />
          <div className="flex flex-col gap-2">
            <p className="text-t1 text-blue-blueblack">연동된 계정이 없어요.</p>
            <p className="text-b2M text-grayscale-600">
              콘텐츠를 제작하기 위해서는
              <span className="text-grayscale-800"> 1개 이상의 채널 연동이 필요해요. </span>
              지금 바로 계정을 연동하고, 콘텐츠를 손쉽게 여러 플랫폼에 퍼뜨려보세요.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LinkModal;
