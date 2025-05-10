import { Container } from "@/components";
import SignInFooter from "@/app/(auth)/sign-in/_components/SignInFooter";
import SignInForm from "@/app/(auth)/sign-in/_components/SignInForm";
import SignInHeader from "@/app/(auth)/sign-in/_components/SignInHeader";

const SignIn = () => {
  return (
    <Container className="relative bg-center bg-cover bg-background-default flex flex-col gap-[54px]">
      <SignInHeader />
      <SignInForm />
      <SignInFooter />
    </Container>
  );
};

export default SignIn;
