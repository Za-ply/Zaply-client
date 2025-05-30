import { Container } from "@/components";
import BNB from "@/components/common/bnb";
import MyPageHeader from "./_components/MyPageHeader";
import MyPageList from "./_components/MyPageList";

export default function MyPage() {
  return (
    <>
      <Container className="overflow-y-scroll scrollbar-hide min-h-real-screen bg-b300-g100-mypage flex flex-col gap-[40px] pb-[157px]">
        <MyPageHeader />
        <MyPageList />
      </Container>
      <BNB />
    </>
  );
}
