"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function GoogleCallback() {
  useEffect(() => {
    if (window.opener) {
      window.opener.location.href = "/main";
      setTimeout(() => {
        window.close();
      }, 100);
    }
  }, []);

  return (
    <div className="flex bg-b500-g100 items-center justify-center my-auto min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <Image src={"/assets/svgs/google-logo.svg"} alt="google-logo" width={48} height={48} />
        <p className="text-h3 text-blue-blueblack text-center">
          Google 계정으로
          <br />
          로그인하고 있어요.
        </p>
      </div>
    </div>
  );
}
