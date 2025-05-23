"use client";

import { useEffect } from "react";
import { useSnsLinkStore } from "@/app/(mypage)/connect/_components/store/link-store";
import Image from "next/image";
import { threadCircle } from "@public/assets/images/sns";

export default function ThreadsCallback() {
  const { setLinked } = useSnsLinkStore();

  useEffect(() => {
    if (window.opener) {
      window.opener.location.href = "/connect-complete?status=success&platform=threads";
      setTimeout(() => {
        window.close();
      }, 100);
    }
  }, [setLinked]);

  return (
    <div className="flex bg-b500-g100 items-center justify-center my-auto min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <Image src={threadCircle} alt="threadCircle" width={48} height={48} />
        <p className="text-h3 text-blue-blueblack">
          Threads 계정을
          <br />
          연동하고 있어요.
        </p>
      </div>
    </div>
  );
}
