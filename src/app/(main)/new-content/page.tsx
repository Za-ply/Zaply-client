import { Container } from "@/components";
import { PlatformSelectStep, ContentMakeStep } from "./_components/steps";

export default function NewContentPage({ searchParams }: { searchParams: { step: string } }) {
  return (
    <Container className=" bg-grayscale-100 pt-[106px]">
      {searchParams.step === "1" && <PlatformSelectStep />}
      {searchParams.step === "2" && <ContentMakeStep />}
      {/* {searchParams.step === "3" && <BottomSection />} */}
    </Container>
  );
}
