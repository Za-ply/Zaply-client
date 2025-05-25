"use client";

import { ArrowIcon, Container, TopBar } from "@/components";
import BNB from "@/components/common/bnb";
import { useRouter } from "next/navigation";

export default function ReservedContentDetailPage() {
  const router = useRouter();
  return (
    <div>
      <Container className="bg-grayscale-100 flex flex-col min-h-real-screen">
        <TopBar
          left={<ArrowIcon type="left" className="cursor-pointer" onClick={() => router.back()} />}
          center={<p className="text-t4 text-grayscale-900">업로드 예약</p>}
          right={<p className="text-button2 text-redscale-700 cursor-pointer">삭제</p>}
        />
        <div className="flex flex-col"></div>
      </Container>
      <BNB />
    </div>
  );
}
