import { Container } from "@/components";
import {
  ContentMakeStep,
  PlatformSelectStep,
  ReserveStep,
  UploadConfirmStep,
} from "./_components/step";

export default async function NewContentPage({ searchParams }: { searchParams: { step: string } }) {
  return (
    <Container className="relative bg-grayscale-100 pt-[60px] min-h-real-screen">
      {searchParams.step === "1" && <PlatformSelectStep />}
      {searchParams.step === "2" && <ContentMakeStep />}
      {searchParams.step === "3" && <UploadConfirmStep />}
      {searchParams.step === "4" && <ReserveStep />}
    </Container>
  );
}
