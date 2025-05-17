import Image, { StaticImageData } from "next/image";
import React from "react";
import { PlatformType } from "@/types/contentItem";
import { instagramCircle, threadCircle, facebookCircle } from "@public/assets/images/sns";

interface PlatformsProps {
  platforms: PlatformType[];
}

const platformIcons: Record<PlatformType, StaticImageData> = {
  instagram: instagramCircle,
  threads: threadCircle,
  facebook: facebookCircle,
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
