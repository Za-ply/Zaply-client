"use client";

import Image from "next/image";
import { cn } from "@/utils";
import { AddIcon, CancelSolidIcon, Input } from "@/components";
import { useToast } from "@/utils/useToast";
import { usePlatformStore } from "../../../store";
import { useFilePreview } from "../../../hooks/useFilePreview";
import { policyConfig } from "../../../config/constraint-config";
import { useContentMakeStore } from "../../../store/content-make-store";

const UploadFile = () => {
  const { selectedPlatform } = usePlatformStore();
  const { previewUrls, handleFileChange, removeFile } = useFilePreview();
  const { toast } = useToast();
  const { setFiles, postData } = useContentMakeStore();

  const handleRemoveFile = (index: number) => {
    removeFile(index);
    const newFiles = [...postData.files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const { maxImageCount } =
    selectedPlatform !== null ? policyConfig[selectedPlatform] : { maxImageCount: 0 };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const remainingSlots = maxImageCount - previewUrls.length;

    if (remainingSlots <= 0) {
      toast({
        variant: "error",
        description: "최대 업로드 가능한 이미지 개수를 초과했습니다.",
      });
      e.target.value = "";
      return;
    }

    if (files.length > remainingSlots) {
      const selectedFiles = files.slice(0, remainingSlots);

      const dataTransfer = new DataTransfer();
      selectedFiles.forEach(file => dataTransfer.items.add(file));

      e.target.files = dataTransfer.files;

      toast({
        variant: "error",
        description: `최대 ${maxImageCount}개까지만 업로드 가능하여 ${remainingSlots}개의 파일만 선택되었습니다.`,
      });
    }

    handleFileChange(e);
    setFiles(files);
  };

  // const formData = getFormData();
  // useEffect(() => {
  //   formData.forEach((value, key) => {
  //     console.log(key, value);
  //   });
  // }, [formData]);

  return (
    <div
      className={cn({
        "flex flex-col gap-2": previewUrls.length === 0,
        "grid grid-cols-4 gap-2": previewUrls.length !== 0,
      })}>
      <label
        htmlFor="file"
        className="flex flex-col items-center justify-center w-full col-span-1 gap-1 px-5 py-3 rounded-xl bg-grayscale-200">
        <AddIcon className="text-grayscale-600" />
        <p className="text-grayscale-600 text-b2M">
          {`${previewUrls.length > 0 ? "" : "사진/동영상 추가"}`} ({previewUrls.length}/
          {maxImageCount})
          {/* {maxImageCount === 50 ? <span className="text-b4M">제한 없음</span> : maxImageCount}) */}
          {/* 페이스북은 이미지 제한 50개 임의 설정 */}
        </p>
        <Input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleFileSelect}
          multiple
          accept="image/*,video/*"
        />
      </label>
      {previewUrls.map((url, index) => (
        <div key={index} className="relative aspect-square">
          <CancelSolidIcon
            className="rounded-full bg-grayscale-100 text-grayscale-800 absolute -top-[10px] -right-[10px] shadow-cancel z-10 cursor-pointer"
            onClick={() => handleRemoveFile(index)}
          />
          <Image
            src={url}
            alt={`미리보기 ${index + 1}`}
            fill
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default UploadFile;
