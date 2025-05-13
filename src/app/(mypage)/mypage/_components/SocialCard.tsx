"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/common/button";
import { ArrowIcon, ChevronIcon } from "@/components/icons";
import SnsProfile from "./SnsProfile";

const snsStatus = [
  { type: "instagram", isLinked: true },
  { type: "thread", isLinked: false },
  { type: "facebook", isLinked: true },
] as const;

export const SocialCard = () => {
  const linkedCount = snsStatus.filter(sns => sns.isLinked).length;
  const router = useRouter();

  return (
    <div className="w-full px-5 py-4 rounded-[8px] bg-grayscale-100 flex flex-col gap-4 shadow-drop">
      <div className="flex items-center justify-between">
        <p className="text-b2M text-grayscale-900">
          연동된 계정 <span className="text-blue-700">{linkedCount}</span>
        </p>
        <div className="flex items-center gap-[2px] cursor-pointer">
          <p className="text-b3M text-grayscale-600">전체 보기</p>
          <ChevronIcon type="right" className="w-[20px] h-[20px] text-grayscale-800" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <SnsProfile type="instagram" isLinked={true} />
        <SnsProfile type="thread" isLinked={false} />
        <SnsProfile type="facebook" isLinked={true} />
      </div>
      <div className="p-[1px] rounded-full bg-b700-g700" onClick={() => router.push("/connect")}>
        <Button
          className="bg-white w-full h-[48px] rounded-full text-button2 text-blue-700"
          variant="subAction"
          rightIcon={<ArrowIcon type="right" className="text-blue-700" />}>
          새 계정 연결하기
        </Button>
      </div>
    </div>
  );
};

export default SocialCard;
