"use client";

import { Container } from "@/components";
import { TopBar } from "@/components/common/topBar";
import { ArrowIcon } from "@/components/icons/service";
import { useRouter } from "next/navigation";
import SocialUnLinked from "../_components/SocialUnLinked";
import BNB from "@/components/common/bnb";

export const UnLinked = () => {
  const router = useRouter();

  return (
    <>
      <Container className="overflow-y-scroll scrollbar-hide min-h-real-screen bg-center bg-cover bg-grayscale-100 flex flex-col pb-[157px]">
        <TopBar
          left={
            <ArrowIcon
              type="left"
              className="text-grayscale-900 cursor-pointer"
              onClick={() => router.back()}
            />
          }
        />
        <SocialUnLinked />
      </Container>
      <BNB />
    </>
  );
};

export default UnLinked;
