"use client";

import Image from "next/image";
import profile1 from "@public/assets/images/profile1.webp";
import { CircleCheckBoldIcon, CircleCheckIcon, DefaultProfileIcon } from "@/components";
import { useEffect, useState } from "react";
import { Platforms } from "@/types/platform";
import { platformConfig } from "../../config/platform-config";
import { useContentMakeStore } from "../../store/content-make-store";
import { useProfileImage } from "../../hooks/useProfileImage";
import { cn } from "@/utils";

interface PlatformButtonProps {
  isAccountConnected: boolean;
  platform: Platforms;
  hasProfileImage: boolean;
  type: "upload" | "content";
  isDisabled?: boolean;
  isFirst?: boolean;
  className?: string;
}

const PlatformButton = ({
  isAccountConnected,
  platform,
  hasProfileImage,
  type,
  isDisabled = false,
  isFirst = false,
  className,
}: PlatformButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const { postData, selectedContentPlatform, setUploadPlatforms, setSelectedContentPlatform } =
    useContentMakeStore();
  const displayImage = useProfileImage(platform);

  useEffect(() => {
    if (type === "content" && isFirst) {
      setIsChecked(true);
    }
  }, [type, isFirst]);

  useEffect(() => {
    if (type === "upload") {
      setIsChecked(postData.uploadPlatforms.includes(platform));
      setUploadPlatforms(postData.uploadPlatforms);
    } else if (type === "content") {
      setIsChecked(selectedContentPlatform === platform);
    }
  }, [postData.uploadPlatforms, selectedContentPlatform, platform, type]);

  const handleClick = () => {
    if (isDisabled) return;

    if (type === "upload") {
      if (!isChecked) {
        setUploadPlatforms([...postData.uploadPlatforms, platform]);
      } else {
        setUploadPlatforms(postData.uploadPlatforms.filter(p => p !== platform));
      }
    } else if (type === "content") {
      if (selectedContentPlatform === platform) {
        setSelectedContentPlatform(null);
      } else {
        setSelectedContentPlatform(platform);
      }
    }
  };

  return (
    <button type="button" disabled={isDisabled} className={cn("relative w-12 h-12", className)}>
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          onClick={handleClick}
          className={`${
            type === "content" && isChecked ? "border-2 border-blue-700 rounded-full" : ""
          } cursor-pointer transition-all duration-200`}>
          {!isAccountConnected ? (
            <Image
              src={isChecked || type === "content" ? platformConfig[platform].icon : displayImage}
              alt={`${platform} platform`}
              width={48}
              height={48}
              className="rounded-full"
              placeholder="blur"
            />
          ) : hasProfileImage ? (
            <Image
              src={profile1}
              alt="profile"
              width={48}
              height={48}
              className="rounded-full"
              placeholder="blur"
            />
          ) : (
            <div className="flex items-center justify-center w-12 h-12 p-2 rounded-full bg-grayscale-400">
              <DefaultProfileIcon className="text-grayscale-100" />
            </div>
          )}
          {isAccountConnected && (
            <Image
              src={displayImage}
              alt={`${platform} icon`}
              width={20}
              height={20}
              className="absolute bottom-0 right-0 rounded-full"
              placeholder="blur"
            />
          )}
        </div>

        {/* content 타입일 때 선택 표시줄 */}
        {type === "content" && (
          <div className="relative w-10 h-[3px]">
            <div
              className={`absolute w-10 h-[3px] bg-blue-700 rounded-full transition-all duration-300 ease-in-out ${
                selectedContentPlatform === platform
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-1"
              }`}
            />
          </div>
        )}

        {/* upload 타입일 때 체크 아이콘 */}
        {type === "upload" && (
          <div onClick={handleClick} className="cursor-pointer">
            {isChecked ? (
              <CircleCheckBoldIcon className="text-blue-700 transition-all duration-200" />
            ) : (
              <CircleCheckIcon className="transition-all duration-200 text-grayscale-500 hover:text-grayscale-700" />
            )}
          </div>
        )}
      </div>
    </button>
  );
};

export default PlatformButton;
