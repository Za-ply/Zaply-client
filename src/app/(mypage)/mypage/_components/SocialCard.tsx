"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components";
import { ArrowIcon, ChevronIcon } from "@/components/icons";
import SnsProfile from "./SnsProfile";
import { Platforms } from "@/types/platform";
import useUserStore from "@/stores/userStore";

export const SocialCard = () => {
  const accounts = useUserStore(state => state.accounts);
  const linkedCount = accounts.length;
  const router = useRouter();

  const handleConnectClick = () => router.push("/connect");

  const platformProfiles = (
    <div className="flex items-center justify-center gap-3">
      <SnsProfile type={Platforms.INSTAGRAM} />
      <SnsProfile type={Platforms.THREADS} />
      <SnsProfile type={Platforms.FACEBOOK} />
    </div>
  );

  return (
    <div className="w-full px-5 py-4 rounded-[8px] bg-grayscale-100 flex flex-col gap-4 shadow-drop">
      <div className="flex items-center justify-between">
        <p className="text-b2M text-grayscale-900">
          연동된 계정 <span className="text-blue-700">{linkedCount}</span>
        </p>
        <ChevronIcon
          type="right"
          className="w-6 h-6 text-grayscale-800 cursor-pointer"
          onClick={() => router.push("/socials")}
        />
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
