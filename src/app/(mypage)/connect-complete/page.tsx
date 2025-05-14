"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components";
import CompleteContent from "./_components/CompleteContent";
import { Button } from "@/components/common/button";
import { ArrowIcon } from "@/components/icons";
import ErrorContent from "./_components/ErrorContent";
import { cn } from "@/utils";

export const ConnectComplete = () => {
  const [isSuccess, setIsSuccess] = useState(true);
  const router = useRouter();

  return (
    <>
      <Container
        className={cn(
          isSuccess ? "bg-backgroundLine-yellow" : "bg-backgroundLine-pink",
          "min-h-real-screen bg-cover bg-center"
        )}>
        {isSuccess ? <CompleteContent /> : <ErrorContent />}
      </Container>
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50 flex flex-col gap-3">
        <Button
          className="w-full"
          rightIcon={<ArrowIcon type="right" />}
          onClick={() => router.push("/connect")}>
          {isSuccess ? "다른 계정 연결하기" : "다시 시도하기"}
        </Button>
        <Button className="w-full" variant="subAction" onClick={() => router.push("/mypage")}>
          닫기
        </Button>
      </div>
    </>
  );
};

export default ConnectComplete;
