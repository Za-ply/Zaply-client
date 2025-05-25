"use client";

import { Platforms } from "@/types/platform";
import { usePlatformStore } from "../../store";
import Platform from "./Platform";

const PlatformList = () => {
  const { selectedPlatform, setSelectedPlatform } = usePlatformStore();
  const platforms = Object.values([Platforms.INSTAGRAM, Platforms.THREADS, Platforms.FACEBOOK]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      {platforms.map(platform => (
        <Platform
          key={platform}
          platform={platform}
          isSelected={selectedPlatform === platform}
          onSelect={() => setSelectedPlatform(platform)}
        />
      ))}
    </div>
  );
};

export default PlatformList;
