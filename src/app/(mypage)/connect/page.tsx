"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components";
import { TopBar } from "@/components/common/topBar";
import ConnectSocialStep from "./_components/ConnectSocialStep";
import ProfileSelectStep from "./_components/ProfileSelectStep";
import { ArrowIcon } from "@/components/icons/service";
import { Button } from "@/components/common/button";

export const SocialConnect = () => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <Container className="min-h-real-screen bg-grayscale-100 bg-cover bg-center flex flex-col gap-[46px]">
      <TopBar
        hasLine={true}
        left={
          step === 2 ? (
            <ArrowIcon
              type="left"
              className="text-grayscale-900 cursor-pointer"
              onClick={() => setStep(1)}
            />
          ) : null
        }
        center={<p className="text-t4 text-grayscale-900">계정 연결</p>}
        right={
          <p
            className="text-button2 text-grayscale-600 cursor-pointer"
            onClick={() => router.back()}>
            닫기
          </p>
        }
      />
      {step === 1 ? <ConnectSocialStep onNext={() => setStep(2)} /> : <ProfileSelectStep />}
    </Container>
  );
};

export default SocialConnect;
