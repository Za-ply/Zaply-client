"use client";

import { useSelectedSocialStore } from "../../connect/_components/store/social-store";
import SnsProfile, { SnsType } from "../../mypage/_components/SnsProfile";

export const CompleteContent = () => {
  const { selected } = useSelectedSocialStore();

  return (
    <section className="pt-[194px] flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center gap-1">
        <SnsProfile type={selected?.toLowerCase() as SnsType} hasBorder={true} />
        <p className="text-b2M text-blue-700 italic creato-500">@username1</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-h3 text-grayscale-900">계정이 연결되었어요!</p>
        <p className="text-b2R text-grayscale-700">재플리와 함께 계정을 성장시켜보세요.</p>
      </div>
    </section>
  );
};

export default CompleteContent;
