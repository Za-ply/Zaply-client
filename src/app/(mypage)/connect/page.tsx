"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components";
import { TopBar } from "@/components/common/topBar";
import ConnectSocialStep from "./_components/ConnectSocialStep";

export default function SocialConnect() {
  const router = useRouter();

  return (
    <Container className="min-h-real-screen bg-grayscale-100 bg-cover bg-center flex flex-col gap-[46px]">
      <TopBar
        hasLine={true}
        center={<p className="text-t4 text-grayscale-900">계정 연결</p>}
        right={
          <p
            className="cursor-pointer text-button2 text-grayscale-600"
            onClick={() => router.push("/mypage")}>
            닫기
          </p>
        }
      />
      <ConnectSocialStep />
    </Container>
  );
}
