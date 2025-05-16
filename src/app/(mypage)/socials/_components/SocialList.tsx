"use client";

import { useRouter } from "next/navigation";
import { useSnsLinkStore } from "../../connect/_components/store/link-store";
import { ChevronIcon } from "@/components/icons";
import SnsProfile from "../../mypage/_components/SnsProfile";
import { Platforms } from "@/types/platform";

const snsList: { name: string; type: Platforms }[] = [
  {
    name: "Instagram",
    type: Platforms.INSTAGRAM,
  },
  {
    name: "Thread",
    type: Platforms.THREADS,
  },
  {
    name: "Facebook",
    type: Platforms.FACEBOOK,
  },
];

const SocialList = () => {
  const router = useRouter();
  const { linkedStatus } = useSnsLinkStore();
  console.log(linkedStatus);

  return (
    <section className="pt-[92px] w-full flex flex-col gap-3">
      {snsList.map(({ name, type }, index) => {
        const isLast = index === snsList.length - 1;
        const isLinked = linkedStatus[type];

        console.log("type:", type, "linked:", linkedStatus[type]);

        const handleClick = () => {
          const path = isLinked
            ? `/socials/unlinked?platform=${type}`
            : `/socials/info?platform=${type}`;
          router.push(path);
        };

        return (
          <div
            key={type}
            onClick={handleClick}
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
