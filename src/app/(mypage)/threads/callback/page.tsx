"use client";

import { useEffect } from "react";
import { useSnsLinkStore } from "@/app/(mypage)/connect/_components/store/link-store";
import { Platforms } from "@/types/platform";

export default function ThreadsCallback() {
  const { setLinked } = useSnsLinkStore();

  useEffect(() => {
    if (window.opener) {
      window.opener.location.href = "/connect-complete?status=success";
      setTimeout(() => {
        window.close();
      }, 100);
    }
  }, [setLinked]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-xl font-semibold mb-2">Threads 연동 완료</h1>
        <p className="text-gray-600">잠시 후 창이 닫힙니다.</p>
      </div>
    </div>
  );
}
