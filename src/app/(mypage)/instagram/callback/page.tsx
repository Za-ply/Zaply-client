"use client";

import { useEffect } from "react";
import Image from "next/image";
import { instagramCircle } from "@public/assets/images/sns";
import { useRouter } from "next/navigation";

export default function InstagramCallback() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/connect-complete?status=success&platform=instagram");
    }, 100);
  }, []);

  return (
    <div className="flex bg-b500-g100 items-center justify-center my-auto min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <Image src={instagramCircle} alt="threadCircle" width={48} height={48} />
        <p className="text-h3 text-blue-blueblack text-center">
          Instagram 계정을
          <br />
          연동하고 있어요.
        </p>
      </div>
    </div>
  );
}
