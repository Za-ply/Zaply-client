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
import useUserStore from "@/stores/userStore";

const snsTypeToPlatform: Record<string, Platforms> = {
  INSTAGRAM: Platforms.INSTAGRAM,
  THREADS: Platforms.THREADS,
  FACEBOOK: Platforms.FACEBOOK,
};

interface PlatformButtonProps {
  isAccountConnected: boolean;
  platform: Platforms;
  hasProfileImage: boolean;
  type: "upload" | "content";
  isDisabled?: boolean;
  isFirst?: boolean;
  className?: string;
  onClick?: () => void;
}

const PlatformButton = ({
  isAccountConnected,
  platform,
  hasProfileImage,
  type,
  isDisabled = false,
  isFirst = false,
  className,
  onClick,
}: PlatformButtonProps) => {
  const {
    postData,
    selectedContentPlatform,
    setUploadPlatforms,
    setSelectedContentPlatform,
    setPlatformChecked,
  } = useContentMakeStore();
  const isChecked = postData.selectedPlatforms[platform];
  const displayImage = useProfileImage(platform);
  const accounts = useUserStore(state => state.accounts);

  const accountProfileImage = accounts.find(
    account => snsTypeToPlatform[account.snsType] === platform
  )?.profileImageUrl;

  useEffect(() => {
    if (type === "content") {
      if (isFirst && !selectedContentPlatform) {
        setPlatformChecked(platform, true);
        setSelectedContentPlatform(platform);
      }
    }
  }, [
    type,
    isFirst,
    platform,
    setSelectedContentPlatform,
    setPlatformChecked,
    selectedContentPlatform,
  ]);

  useEffect(() => {
    if (type === "upload") {
      if (!postData.uploadPlatforms.includes(platform) && isChecked) {
        setUploadPlatforms([...postData.uploadPlatforms, platform]);
      }
    } else if (type === "content") {
      if (selectedContentPlatform === platform && !isChecked) {
        setPlatformChecked(platform, true);
      } else if (selectedContentPlatform !== platform && isChecked) {
        setPlatformChecked(platform, false);
      }
    }
  }, [
    postData.uploadPlatforms,
    selectedContentPlatform,
    platform,
    type,
    setPlatformChecked,
    isChecked,
  ]);

  const handleClick = () => {
    if (isDisabled) return;
    if (onClick) {
      onClick();
      return;
    }

    const newChecked = !isChecked;
    setPlatformChecked(platform, newChecked);

    if (type === "upload") {
      if (newChecked) {
        setUploadPlatforms([...postData.uploadPlatforms, platform]);
      } else {
        setUploadPlatforms(postData.uploadPlatforms.filter(p => p !== platform));
      }
    } else if (type === "content") {
      if (newChecked) {
        setSelectedContentPlatform(platform);
      } else {
        setSelectedContentPlatform(null);
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
              src={accountProfileImage || profile1}
              alt="profile"
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
