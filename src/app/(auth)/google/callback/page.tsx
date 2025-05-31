"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import authService from "@/lib/api/service/AuthService";

export default function GoogleCallback() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleGoogleLogin = async () => {
      try {
        const code = searchParams.get("code");
        if (!code) return;

        await authService.googleLogin(code);

        if (window.opener) {
          window.opener.location.href = "/main";
          setTimeout(() => {
            window.close();
          }, 100);
        } else {
          window.location.href = "/main";
        }
      } catch (error) {
        console.error("Google login failed:", error);
      }
    };

    handleGoogleLogin();
  }, [searchParams]);

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
