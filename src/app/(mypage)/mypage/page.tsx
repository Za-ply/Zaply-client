import { Container } from "@/components";
import BNB from "@/components/common/bnb";
import MyPageHeader from "./_components/MyPageHeader";

export const MyPage = () => {
  return (
    <>
      <Container className="bg-center bg-cover bg-backgroundLine-white flex flex-col gap-[40px]">
        <MyPageHeader />
      </Container>
      <BNB />
    </>
  );
};

export default MyPage;
