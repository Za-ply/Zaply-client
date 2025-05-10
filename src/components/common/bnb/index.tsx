"use client";

import { useState } from "react";
import { ChartIcon, ChatDotIcon, ExportIcon, UserIcon } from "@/components/icons";

const BNB = () => {
  const [activeTab, setActiveTab] = useState<"upload" | "insight" | "comment" | "mypage">("upload");

  return (
    <nav className="w-full max-w-[440px] mx-auto shadow-drop fixed left-0 right-0 bottom-0 flex justify-between h-[120px] bg-grayscale-100 rounded-t-[20px] px-8 py-3">
      <div
        onClick={() => setActiveTab("upload")}
        className="flex flex-col items-center gap-[6px] px-2 py-[6px] cursor-pointer">
        <ExportIcon
          className={activeTab === "upload" ? "text-grayscale-900" : "text-grayscale-600"}
        />
        <p
          className={`text-b4M text-center ${
            activeTab === "upload" ? "text-grayscale-900" : "text-grayscale-600"
          }`}>
          업로드
        </p>
      </div>

      <div
        onClick={() => setActiveTab("insight")}
        className="flex flex-col items-center gap-[6px] px-2 py-[6px] cursor-pointer">
        <ChartIcon
          className={activeTab === "insight" ? "text-grayscale-900" : "text-grayscale-600"}
        />
        <p
          className={`text-b4M text-center ${
            activeTab === "insight" ? "text-grayscale-900" : "text-grayscale-600"
          }`}>
          인사이트
        </p>
      </div>

      <div
        onClick={() => setActiveTab("comment")}
        className="flex flex-col items-center gap-[6px] px-2 py-[6px] cursor-pointer">
        <ChatDotIcon
          className={activeTab === "comment" ? "text-grayscale-900" : "text-grayscale-600"}
        />
        <p
          className={`text-b4M text-center ${
            activeTab === "comment" ? "text-grayscale-900" : "text-grayscale-600"
          }`}>
          댓글 관리
        </p>
      </div>

      <div
        onClick={() => setActiveTab("mypage")}
        className="flex flex-col items-center gap-[6px] px-2 py-[6px] cursor-pointer">
        <UserIcon
          className={activeTab === "mypage" ? "text-grayscale-900" : "text-grayscale-600"}
        />
        <p
          className={`text-b4M text-center ${
            activeTab === "mypage" ? "text-grayscale-900" : "text-grayscale-600"
          }`}>
          MY
        </p>
      </div>
    </nav>
  );
};

export default BNB;
