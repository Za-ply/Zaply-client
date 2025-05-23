import { Container } from "@/components";
import SignInFooter from "@/app/(auth)/sign-in/_components/SignInFooter";
import SignInForm from "@/app/(auth)/sign-in/_components/SignInForm";
import SignInHeader from "@/app/(auth)/sign-in/_components/SignInHeader";

export default function SignIn() {
  return (
    <Container className="min-h-real-screen relative bg-center bg-cover bg-background-default flex flex-col justify-between">
      <SignInHeader />
      <SignInForm />
      <SignInFooter />
    </Container>
  );
}
