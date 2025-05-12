import { Container } from "@/components";
import BNB from "@/components/common/bnb";

export const MyPage = () => {
  return (
    <>
      <Container className="bg-center bg-cover bg-backgroundLine-yellow flex flex-col gap-[40px]">
        <div>마이페이지</div>
      </Container>
      <BNB />
    </>
  );
};

export default MyPage;
