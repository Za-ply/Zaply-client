"use client";

import Image from "next/image";

import { instagramCircle, threadCircle, facebookCircle } from "@public/assets/images/sns";
import { Category, Platforms } from "@/types/platform";
import { usePlatformStore } from "../store/platform-store";

const Bedge = () => {
  const { selectedPlatform, selectedCategory } = usePlatformStore();
  return (
    <div className="inline-flex items-center gap-2 px-2 py-1 border rounded border-grayscale-300">
      <Image
        src={
          selectedPlatform === Platforms.INSTAGRAM
            ? instagramCircle
            : selectedPlatform === Platforms.THREADS
              ? threadCircle
              : facebookCircle
        }
        alt="instagram"
        width={20}
        height={20}
      />
      <p className="text-b4M text-grayscale-600">
        {selectedCategory === Category.POST
          ? "게시글"
          : selectedCategory === Category.REELS
            ? "릴스"
            : "스토리"}
      </p>
    </div>
  );
};

export default Bedge;
