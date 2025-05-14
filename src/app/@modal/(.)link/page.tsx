import BottomModal from "@/components/common/bottomModal";
import { LinkIcon } from "@/components/icons";
import { useRouter } from "next/navigation";

const LinkModal = () => {
  const router = useRouter();

  return (
    <BottomModal
      isOpen={true}
      mainBtn="계정 연결하기"
      subBtn="다음에 하기"
      onMainBtnClick={() => router.push("/connect")}
      onSubBtnClick={() => router.push("/")}
      className="bottom-0 translate-y-0">
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
    </BottomModal>
  );
};

export default LinkModal;
