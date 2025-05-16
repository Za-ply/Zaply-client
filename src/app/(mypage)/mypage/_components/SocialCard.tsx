"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/common/button";
import { ArrowIcon, ChevronIcon } from "@/components/icons";
import SnsProfile from "./SnsProfile";
import { useSnsLinkStore } from "../../connect/_components/store/link-store";
import Link from "next/link";
import { Platforms } from "@/types/platform";
import { useMemo } from "react";

export const SocialCard = () => {
  const linkedStatus = useSnsLinkStore(state => state.linkedStatus);
  const linkedCount = Object.values(linkedStatus).filter(Boolean).length;
  const router = useRouter();

  const handleConnectClick = () => router.push("/connect");

  const platformProfiles = useMemo(
    () => (
      <div className="flex items-center justify-center gap-3">
        <SnsProfile type={Platforms.INSTAGRAM} />
        <SnsProfile type={Platforms.THREADS} />
        <SnsProfile type={Platforms.FACEBOOK} />
      </div>
    ),
    []
  );

  return (
    <div className="w-full px-5 py-4 rounded-[8px] bg-grayscale-100 flex flex-col gap-4 shadow-drop">
      <div className="flex items-center justify-between">
        <p className="text-b2M text-grayscale-900">
          연동된 계정 <span className="text-blue-700">{linkedCount}</span>
        </p>
        <div className="flex items-center gap-[2px] cursor-pointer">
          <Link className="text-b3M text-grayscale-600" href={"/socials"}>
            전체 보기
          </Link>
          <ChevronIcon type="right" className="w-[20px] h-[20px] text-grayscale-800" />
        </div>
      </div>

      {platformProfiles}

      <div className="p-[1px] rounded-full bg-b700-g700" onClick={handleConnectClick}>
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
