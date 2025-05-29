"use client";

import Image from "next/image";
import { instagramCircle } from "@public/assets/images/sns";
import { Button } from "@/components";
import { useEffect, useState } from "react";
import accountController from "@/lib/api/controller/AccountController";
import { useRouter } from "next/navigation";

export default function InstagramCallback() {
  const [accessToken, setAccessToken] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const token = params.get("access_token");
      if (token) {
        setAccessToken(token);
      }
    }
  }, []);

  const handleLink = async () => {
    try {
      await accountController.instagramLink({ access_token: accessToken });
      router.push("/instagram/callback");
    } catch (error) {
      console.error("인스타그램 연동 실패:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-auto bg-b500-g100">
      <div className="flex flex-col justify-center flex-1 gap-4">
        <Image src={instagramCircle} alt="facebookCircle" width={48} height={48} />
        <p className="text-center text-h3 text-blue-blueblack">
          Instagram 계정을
          <br />
          연동할게요.
        </p>
      </div>
      <div className="w-full px-5 mb-[60px]">
        <Button variant="subAction" onClick={handleLink}>
          계정 연동하기
        </Button>
      </div>
    </div>
  );
}
