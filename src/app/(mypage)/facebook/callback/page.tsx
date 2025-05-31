"use client";

import { useEffect } from "react";
import Image from "next/image";
import { facebookCircle } from "@public/assets/images/sns";
import { useRouter } from "next/navigation";

export default function FacebookCallback() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/connect-complete?status=success&platform=facebook");
    }, 100);
  }, []);

  return (
    <div className="flex bg-b500-g100 items-center justify-center my-auto min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <Image src={facebookCircle} alt="facebookCircle" width={48} height={48} />
        <p className="text-h3 text-blue-blueblack">
          Facebook 계정을
          <br />
          연동하고 있어요.
        </p>
      </div>
    </div>
  );
}
