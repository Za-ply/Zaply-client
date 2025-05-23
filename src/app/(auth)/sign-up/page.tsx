import { Container } from "@/components";
import EmailCheckWrapper from "./_components/email/EmailCheckWrapper";
import PasswordCheckWrapper from "./_components/password/PasswordCheckWrapper";
import UserInfoWrapper from "./_components/userInfo/UserInfoWrapper";

export default function SignInPage({ searchParams }: { searchParams: { state: string } }) {
  const state = searchParams.state;
  return (
    <Container className="relative bg-grayscale-100">
      {state === "EMAIL" ? <EmailCheckWrapper /> : null}
      {state === "PASSWORD" ? <PasswordCheckWrapper /> : null}
      {state === "USER_INFO" ? <UserInfoWrapper /> : null}
    </Container>
  );
}
