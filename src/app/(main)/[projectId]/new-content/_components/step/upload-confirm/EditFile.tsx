"use client";

import Image from "next/image";
import { useFilePreview } from "../../hooks/useFilePreview";
import { useContentMakeStore } from "../../store/content-make-store";
import { policyConfig } from "../../config/constraint-config";
import { EditIcon } from "@/components";

const EditFile = () => {
  const { previewUrls } = useFilePreview();
  const { selectedContentPlatform } = useContentMakeStore();

  const maxCount = selectedContentPlatform
    ? policyConfig[selectedContentPlatform].maxImageCount
    : 0;

  return (
    <div className="p-4 mt-3 bg-grayscale-200 rounded-xl mb-[150px]">
      <div className="flex items-center justify-start gap-1 overflow-x-auto max-w-[368px] scrollbar-thin scrollbar-h-[3px] scrollbar-thumb-grayscale-900 scrollbar-track-grayscale-300 pb-3">
        {previewUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt="파일 미리보기"
            width={90}
            height={120}
            className="object-cover rounded-lg w-[90px] h-[120px] aspect-square"
            placeholder="blur"
            blurDataURL="/assets/images/blur.png"
          />
        ))}
      </div>
      <div className="flex items-center justify-between w-full mt-4">
        <p className="text-b4M text-grayscale-600">
          *사진/동영상&nbsp;
          <>
            ({previewUrls.length}/{maxCount})
          </>
        </p>

        <button
          type="button"
          className="flex items-center gap-1 px-2 py-[2px] text-blue-700 rounded-full bg-grayscale-100">
          <EditIcon />
          <p className="text-b3M">수정</p>
        </button>
      </div>
    </div>
  );
};

export default EditFile;
