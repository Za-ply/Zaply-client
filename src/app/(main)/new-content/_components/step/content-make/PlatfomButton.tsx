"use client";

import Image from "next/image";
import { CircleCheckBoldIcon, CircleCheckIcon, DefaultProfileIcon } from "@/components";
import { useState } from "react";
import { Platforms } from "@/types/platform";
import { useProfileImage } from "@/app/(main)/new-content/_components/hooks/useProfileImage";

import profile1 from "@public/assets/images/profile1.webp";
import { platformConfig } from "../../config/platform-config";

interface PlatformButtonProps {
  isAccountConnected: boolean;
  platform: Platforms;
  hadProfileImage: boolean;
}

const PlatformButton = ({ isAccountConnected, platform, hadProfileImage }: PlatformButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const displayImage = useProfileImage(platform);

  return (
    <div className="relative w-12 h-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <div onClick={() => setIsChecked(!isChecked)}>
          {!isAccountConnected ? (
            <Image
              src={isChecked ? platformConfig[platform].icon : displayImage}
              alt="upload location"
              width={48}
              height={48}
              className="rounded-full"
            />
          ) : hadProfileImage ? (
            <Image
              src={profile1}
              alt="upload location"
              width={48}
              height={48}
              className="rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center w-12 h-12 p-2 rounded-full bg-grayscale-400">
              <DefaultProfileIcon className="text-grayscale-100" />
            </div>
          )}
          {isAccountConnected && (
            <Image
              src={displayImage}
              alt="upload location"
              width={20}
              height={20}
              className="absolute bottom-0 right-0 rounded-full"
            />
          )}
        </div>
        {isChecked ? (
          <CircleCheckBoldIcon className="text-blue-700" onClick={() => setIsChecked(false)} />
        ) : (
          <CircleCheckIcon className="text-grayscale-500" onClick={() => setIsChecked(true)} />
        )}
      </div>
    </div>
  );
};

export default PlatformButton;
