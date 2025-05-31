"use client";

import { Button } from "@/components";
import { useRouter } from "next/navigation";

const OnBoardingFooter = () => {
  const router = useRouter();

  return (
    <footer className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
      <Button onClick={() => router.push("/sign-in")}>시작하기</Button>
    </footer>
  );
};

export default OnBoardingFooter;
