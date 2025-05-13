import { useState } from "react";
import { Button } from "@/components/common/button";
import ProfileSelect from "./ProfileSelect";

export const ProfileSelectStep = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

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
          disabled={!selectedId}>
          연결하기
        </Button>
      </div>
    </>
  );
};

export default ProfileSelectStep;
