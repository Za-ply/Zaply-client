import { Container } from "@/components";
import SuccessContent from "./_components/SuccessContent";
import ErrorContent from "./_components/ErrorContent";

export default function UploadComplete({ searchParams }: { searchParams: { success: boolean } }) {
  const isSuccess = searchParams.success;

  return (
    <Container
      className={`flex flex-col min-h-real-screen ${isSuccess ? "bg-b500-g100" : "bg-b500-p300"}`}>
      {isSuccess ? <SuccessContent /> : <ErrorContent />}
    </Container>
  );
}
