"use client";

import Image from "next/image";
import { useFilePreview } from "../../hooks/useFilePreview";

const EditFile = () => {
  const { previewUrls } = useFilePreview();

  return (
    <div className="p-4 mt-3 bg-grayscale-200 rounded-xl mb-[150px]">
      <div className="flex items-center justify-start gap-1 overflow-x-auto max-w-[368px] scrollbar-thin scrollbar-thumb-grayscale-900 scrollbar-track-grayscale-300 pb-3">
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
    </div>
  );
};

export default EditFile;
