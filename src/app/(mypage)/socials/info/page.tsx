"use client";

import { Container } from "@/components";
import { TopBar } from "@/components/common/topBar";
import { ArrowIcon } from "@/components/icons/service";
import { useRouter } from "next/navigation";
import InfoCard from "../_components/InfoCard";

export const SocialInfo = () => {
  const router = useRouter();

  return (
    <Container className="overflow-y-scroll scrollbar-hide min-h-real-screen bg-center bg-cover bg-grayscale-100 flex flex-col gap-12 pb-[157px]">
      <TopBar
        left={
          <ArrowIcon
            type="left"
            className="text-grayscale-900 cursor-pointer"
            onClick={() => router.back()}
          />
        }
      />
      <InfoCard />
    </Container>
  );
};

export default SocialInfo;
