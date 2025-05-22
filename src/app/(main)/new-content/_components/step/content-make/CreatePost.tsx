"use client";

import { Button } from "@/components";
import { useContentMakeStore } from "../../store/content-make-store";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
const CreatePost = () => {
  const { postData } = useContentMakeStore();
  const router = useRouter();

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  const isDisabled = useMemo(() => {
    return (
      postData.content.length === 0 ||
      postData.files.length === 0 ||
      postData.uploadPlatforms.length === 0
    );
  }, [postData]);

  return (
    <div className="max-w-[440px] border-t border-grayscale-200 mx-auto pt-2 fixed bottom-0 left-0 right-0 z-10 shadow-drop bg-grayscale-100">
      <Button
        variant={isDisabled ? "deactive" : "active"}
        className="w-[350px] mx-auto mb-[60px]"
        onClick={() => router.push("/transform-loading")}
        disabled={isDisabled}>
        다음
      </Button>
    </div>
  );
};

export default CreatePost;
