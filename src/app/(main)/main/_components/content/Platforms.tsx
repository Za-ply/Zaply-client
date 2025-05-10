import Image from "next/image";
import React from "react";
import { PlatformType } from "@/types/contentItem";

interface PlatformsProps {
  platforms: PlatformType[];
}

const platformIcons: Record<PlatformType, string> = {
  instagram: "/assets/images/insta-logo.svg",
  threads: "/assets/images/threads-logo.svg",
  facebook: "/assets/images/facebook-logo.svg",
};

const Platforms = ({ platforms }: PlatformsProps) => {
  return (
    <div className="flex items-center">
      {platforms.map((platform, index) => (
        <div key={platform} className={index !== 0 ? "-ml-1" : ""}>
          <Image width={20} height={20} src={platformIcons[platform]} alt={`${platform} icon`} />
        </div>
      ))}
    </div>
  );
};

export default Platforms;
