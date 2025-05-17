import Image from "next/image";
import { Container, TopBar } from "@/components";
import OnBoardingContent from "./_components/OnBoardingContent";
import OnBoardingFooter from "./_components/OnBoardingFooter";

export default function OnBoarding() {
  return (
    <Container className="min-h-real-screen bg-center bg-cover bg-background-default flex flex-col gap-[114px]">
      <TopBar
        left={<Image src={"/assets/images/logo-black.webp"} width={99} height={36} alt="logo" />}
      />
      <OnBoardingContent />
      <OnBoardingFooter />
    </Container>
  );
}
