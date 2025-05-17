"use client";

import { Container } from "@/components";
import BNB from "@/components/common/bnb";
import SocialList from "./_components/SocialList";
import { TopBar } from "@/components/common/topBar";
import { ArrowIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import Update from "./_components/Update";

export default function SocialManage() {
  const router = useRouter();

  return (
    <>
      <Container className="overflow-y-scroll scrollbar-hide min-h-real-screen bg-center bg-cover bg-grayscale-100 flex flex-col gap-12 pb-[157px]">
        <TopBar
          left={
            <ArrowIcon
              type="left"
              className="text-grayscale-900 cursor-pointer"
              onClick={() => router.back()}
            />
          }
          center={<p className="text-t4 text-grayscale-900">연동된 계정 관리</p>}
        />
        <SocialList />
        <Update />
      </Container>
      <BNB />
    </>
  );
}
