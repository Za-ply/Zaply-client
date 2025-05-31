"use client";

import { ArrowIcon, Container, TopBar } from "@/components";
import BNB from "@/components/common/bnb";
import ReservedLists from "./_components/ReservedLists";
import { useRouter } from "next/navigation";

export default function ReservedContentsPage() {
  const router = useRouter();

  return (
    <div>
      <Container className="overflow-y-scroll scrollbar-hide bg-b300-g100 flex flex-col gap-[28px] pb-[185px] min-h-real-screen">
        <TopBar
          left={
            <ArrowIcon
              type="left"
              className="cursor-pointer"
              onClick={() => router.push("/main")}
            />
          }
          center={<p className="text-t4 text-grayscale-900">예약된 콘텐츠</p>}
        />
        <div className="flex flex-col">
          <ReservedLists />
        </div>
      </Container>
      <BNB />
    </div>
  );
}
