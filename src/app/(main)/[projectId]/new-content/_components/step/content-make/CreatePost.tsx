"use client";

import { Button } from "@/components";
import { useContentMakeStore } from "../../store/content-make-store";
import useFilePreviewStore from "../../store/preview-store";
import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import imageService from "@/lib/api/service/ImageService";

const CreatePost = () => {
  const { postData } = useContentMakeStore();
  const { files } = useFilePreviewStore();
  const router = useRouter();
  const { projectId } = useParams<{ projectId: string }>();

  const isDisabled = useMemo(() => {
    return (
      postData.content.length === 0 ||
      postData.files.length === 0 ||
      postData.uploadPlatforms.length === 0
    );
  }, [postData]);

  // const uploadAllImages = async () => {
  //   const uploadedUrls: string[] = [];
  //   const newFiles: { file: File; previewUrl: string }[] = [];

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i].previewUrl;
  //     const fileName = `media_${i}`;

  //     // 1. presigned URL 요청
  //     const { preSignedUrl, objectUrl } = await imageService.getPresignedUrl({
  //       projectId: Number(projectId),
  //       fileName,
  //     });

  //     // 2. 업로드
  //     await fetch(preSignedUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       body: file,
  //     });

  //     // 3. 업로드된 이미지 다시 GET 요청하여 blob 추출
  //     const res = await fetch(objectUrl);
  //     const blob = await res.blob();
  //     const previewUrl = URL.createObjectURL(blob);

  //     // 4. 상태에 저장할 새로운 파일 정보 구성
  //     newFiles.push({
  //       file: new File([blob], fileName, { type: blob.type }),
  //       previewUrl,
  //     });

  //     uploadedUrls.push(objectUrl);
  //   }

  //   // 🔥 preview-store에 저장
  //   useFilePreviewStore.getState().setFiles(newFiles);

  //   return uploadedUrls;
  // };

  const handleNext = async () => {
    try {
      // const uploadedUrls = await uploadAllImages();

      router.push(`/${projectId}/transform-loading`);
    } catch (error) {
      console.error("❌ 이미지 업로드 실패:", error);
      alert("이미지 업로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="max-w-[440px] border-t border-grayscale-200 mx-auto pt-2 fixed bottom-0 left-0 right-0 z-10 shadow-drop bg-grayscale-100">
      <Button
        variant={isDisabled ? "deactive" : "active"}
        className="w-[350px] mx-auto mb-[60px]"
        onClick={handleNext}
        disabled={isDisabled}>
        다음
      </Button>
    </div>
  );
};

export default CreatePost;
