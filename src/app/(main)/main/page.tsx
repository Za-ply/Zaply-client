import Image from "next/image";
import BNB from "@/components/common/bnb";
import MainSection from "./_components/section/MainSection";
import MainContent from "./_components/content/MainContent";
import { Container, TopBar } from "@/components";

export default function Home({ searchParams }: { searchParams: { state: string } }) {
  return (
    <div>
      <Container className="overflow-y-scroll scrollbar-hide bg-b300-g100 flex flex-col gap-[28px] pb-[185px] min-h-real-screen">
        <TopBar
          isBlur={true}
          left={<Image src={"/assets/images/logo-black.webp"} width={99} height={36} alt="logo" />}
        />
        <div className="flex flex-col gap-[72px] ">
          <MainSection state={searchParams.state} />
          <MainContent />
        </div>
      </Container>
      <BNB />
    </div>
  );
}
