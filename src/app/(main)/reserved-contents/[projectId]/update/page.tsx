"use client";

import { ArrowIcon, Container, TopBar } from "@/components";
import { useRouter } from "next/navigation";
import UpdateTimeContent from "../../_components/UpdateTimeContent";

export default function UpdateReservedContentPage() {
  const router = useRouter();

  return (
    <div>
      <Container className="bg-grayscale-100 flex flex-col min-h-real-screen">
        <TopBar
          left={<ArrowIcon type="left" className="cursor-pointer" onClick={() => router.back()} />}
          center={<p className="text-t4 text-grayscale-900">업로드 예약</p>}
          right={<p className="text-button2 text-grayscale-700 cursor-pointer">취소</p>}
        />
        <UpdateTimeContent />
      </Container>
    </div>
  );
}
