"use client";

import { Input } from "@/components";
import { useEffect, useState } from "react";
import { useSNSTransferStore } from "../../store/sns-transfer-store";

const ContentTitle = () => {
  const [content, setContent] = useState("AI가 생성해준 제목명");
  const { recommendContentTitle } = useSNSTransferStore();

  useEffect(() => {
    setContent(recommendContentTitle);
  }, [recommendContentTitle]);

  return (
    <div>
      <p className="text-black text-t3 mt-[14px] mb-6">내용을 확인하고 수정해주세요.</p>
      <p className="text-b3M text-grayscale-900">콘텐츠 제목</p>
      <Input
        value={content}
        placeholder="내용을 입력해주세요."
        type="timer"
        maxLength={20}
        className="px-4 py-3 border-none bg-grayscale-200"
        timerText={`${content.length}/20`}
        timerTextColor="text-grayscale-600"
        onChange={e => setContent(e.target.value)}
      />
    </div>
  );
};

export default ContentTitle;
