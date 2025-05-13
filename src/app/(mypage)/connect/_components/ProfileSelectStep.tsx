"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common/button";
import ProfileSelect from "./ProfileSelect";
import { useSelectedSocialStore } from "./store/social-store";
import { SnsType, useSnsLinkStore } from "./store/link-store";

export const ProfileSelectStep = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleLink = async () => {
    const selected = useSelectedSocialStore.getState().selected?.toLowerCase() as SnsType;
    if (!selectedId || !selected) return;

    try {
      // API 연동

      // 연동 성공 시 상태 업데이트
      useSnsLinkStore.getState().setLinked(selected, true);

      // 페이지 이동
      router.push("/connect-complete");
    } catch (err) {
      console.error("연결 실패", err);
    }
  };

  return (
    <>
      <section className="relative mt-[106px] flex flex-col gap-12 pb-[120px]">
        <div className="flex flex-col gap-2">
          <p className="text-t4 text-blue-700">
            2<span className="text-grayscale-400">/2</span>
          </p>
          <p className="text-t3 text-grayscale-900">연결할 계정을 선택해주세요.</p>
        </div>
        <ProfileSelect selectedId={selectedId} onSelect={setSelectedId} />
      </section>
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
        <Button
          className="w-full"
          variant={selectedId ? "active" : "deactive"}
          disabled={!selectedId}
          onClick={handleLink}>
          연결하기
        </Button>
      </div>
    </>
  );
};

export default ProfileSelectStep;
