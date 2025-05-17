"use client";

import { Button } from "@/components";
import { useRouter } from "next/navigation";

const OnBoardingFooter = () => {
  const router = useRouter();

  return (
    <footer className="w-full">
      <Button onClick={() => router.push("/sign-in")}>시작하기</Button>
    </footer>
  );
};

export default OnBoardingFooter;
