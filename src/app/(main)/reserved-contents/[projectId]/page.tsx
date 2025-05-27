"use client";

import { ArrowIcon, TopBar } from "@/components";
import BNB from "@/components/common/bnb";
import { useRouter } from "next/navigation";
import UpdateReservationContent from "../_components/UpdateReservationContent";

export default function ReservedContentDetailPage() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-real-screen bg-grayscale-200 flex flex-col">
        <div className="bg-grayscale-100">
          <div className="px-5">
            <TopBar
              left={
                <ArrowIcon
                  type="left"
                  className="cursor-pointer"
                  onClick={() => router.push("/reserved-contents")}
                />
              }
              center={<p className="text-t4 text-grayscale-900">업로드 예약</p>}
              right={<p className="text-button2 text-redscale-700 cursor-pointer">삭제</p>}
            />
          </div>
        </div>
        <div className="bg-grayscale-100">
          <UpdateReservationContent />
        </div>
      </div>
      <BNB />
    </>
  );
}
