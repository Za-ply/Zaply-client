import { Container } from "@/components";
import { cn } from "@/utils";
import CompleteContent from "./_components/CompleteContent";
import ErrorContent from "./_components/ErrorContent";

interface ConnectCompleteProps {
  searchParams: { [key: string]: string | undefined };
}

export default function ConnectComplete({ searchParams }: ConnectCompleteProps) {
  const isSuccess = searchParams.success === "true";

  return (
    <>
      <Container
        className={cn(
          isSuccess ? "bg-backgroundLine-yellow" : "bg-backgroundLine-pink",
          "min-h-real-screen bg-cover bg-center"
        )}>
        {isSuccess ? <CompleteContent /> : <ErrorContent />}
      </Container>
    </>
  );
}
