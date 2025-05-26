"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChatDotIcon, ExportIcon, PieChartIcon, UserIcon } from "@/components/icons";
import { cn } from "@/utils";

const BNB = () => {
  const [activeTab, setActiveTab] = useState<"upload" | "insight" | "comment" | "mypage">("upload");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/mypage") || pathname.includes("/socials")) {
      setActiveTab("mypage");
    } else if (pathname.includes("/comment")) {
      setActiveTab("comment");
    } else if (pathname.includes("/insight")) {
      setActiveTab("insight");
    } else if (pathname.includes("/")) {
      setActiveTab("upload");
    }
  }, [pathname]);

  return (
    <nav className="w-full max-w-[440px] mx-auto shadow-drop fixed left-0 right-0 bottom-0 flex justify-between h-[120px] bg-grayscale-100 rounded-t-[20px] px-8 py-3">
      <div
        onClick={() => {
          setActiveTab("upload");
          router.push("/");
        }}
        className="w-[68px] flex flex-col items-center gap-[6px] px-2 py-[6px] cursor-pointer">
        <ExportIcon
          className={cn(
            activeTab === "upload" ? "text-grayscale-900" : "text-grayscale-600",
            "w-[32px] h-[32px]"
          )}
        />
        <p
          className={`text-b4M text-center ${activeTab === "upload" ? "text-grayscale-900" : "text-grayscale-600"}`}>
          업로드
        </p>
      </div>

      <div
        onClick={() => {
          setActiveTab("insight");
          // router.push("/insight");
          router.push("/preparing");
        }}
        className="w-[68px] flex flex-col items-center gap-[6px] px-2 py-[6px] cursor-pointer">
        <PieChartIcon
          className={cn(
            activeTab === "insight" ? "text-grayscale-900" : "text-grayscale-600",
            "w-[32px] h-[32px]"
          )}
        />
        <p
          className={`text-b4M text-center ${activeTab === "insight" ? "text-grayscale-900" : "text-grayscale-600"}`}>
          인사이트
        </p>
      </div>

      <div
        onClick={() => {
          setActiveTab("comment");
          // router.push("/comment");
          router.push("/preparing");
        }}
        className="w-[68px] flex flex-col items-center gap-[6px] px-2 py-[6px] cursor-pointer">
        <ChatDotIcon
          className={cn(
            activeTab === "comment" ? "text-grayscale-900" : "text-grayscale-600",
            "w-[32px] h-[32px]"
          )}
        />
        <p
          className={`text-b4M text-center ${activeTab === "comment" ? "text-grayscale-900" : "text-grayscale-600"}`}>
          댓글 관리
        </p>
      </div>

      <div
        onClick={() => {
          setActiveTab("mypage");
          router.push("/mypage");
        }}
        className="w-[68px] flex flex-col items-center gap-[6px] px-2 py-[6px] cursor-pointer">
        <UserIcon
          className={cn(
            activeTab === "mypage" ? "text-grayscale-900" : "text-grayscale-600",
            "w-[32px] h-[32px]"
          )}
        />
        <p
          className={`text-b4M text-center ${activeTab === "mypage" ? "text-grayscale-900" : "text-grayscale-600"}`}>
          MY
        </p>
      </div>
    </nav>
  );
};

export default BNB;
