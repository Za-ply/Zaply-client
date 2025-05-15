"use client";

import { useSnsLinkStore } from "../../connect/_components/store/link-store";
import { ChevronIcon } from "@/components/icons";
import SnsProfile, { SnsType } from "../../mypage/_components/SnsProfile";

const snsList: { name: string; type: SnsType }[] = [
  {
    name: "Instagram",
    type: "instagram",
  },
  {
    name: "Thread",
    type: "thread",
  },
  {
    name: "Facebook",
    type: "facebook",
  },
];

const SocialList = () => {
  const { linkedStatus } = useSnsLinkStore();

  return (
    <section className="pt-[92px] w-full flex flex-col gap-3">
      {snsList.map(({ name, type }, index) => {
        const isLast = index === snsList.length - 1;
        const isLinked = linkedStatus[type];
        return (
          <div
            key={type}
            className={`w-full flex items-center justify-between pb-3 cursor-pointer ${
              !isLast ? "border-b border-grayscale-grayscale-200" : ""
            }`}>
            <div className="flex gap-3">
              <SnsProfile type={type} />
              <div className="flex flex-col gap-[2px]">
                <p className="text-b2M text-grayscale-900">{isLinked ? "@username" : name}</p>
                <p className={`text-b4R ${isLinked ? "text-grayscale-600" : "text-blue-700"}`}>
                  {isLinked ? "비즈니스 계정" : "연결 필요"}
                </p>
              </div>
            </div>
            <ChevronIcon type="right" className="text-grayscale-600" />
          </div>
        );
      })}
    </section>
  );
};

export default SocialList;
