"use client";

import { Button } from "@/components";
import { useParams, useRouter } from "next/navigation";

const ConfirmButton = () => {
  const router = useRouter();
  const { projectId } = useParams();

  return (
    <div className="max-w-[440px] border-t border-grayscale-200 mx-auto pt-2 fixed bottom-0 left-0 right-0 z-10 shadow-drop bg-grayscale-100">
      <Button
        variant={"active"}
        className="w-[350px] mx-auto mb-[60px]"
        onClick={() => router.push(`/${projectId}/new-content?step=4`)}>
        다음
      </Button>
    </div>
  );
};

export default ConfirmButton;
