"use client";

import { useState } from "react";
import { Button } from "@/components/common/button";
import SocialSelect from "./SocialSelect";
import SocialLogin from "./SocialLogin";
import { useSelectedSocialStore } from "./store/social-store";
import { useToast } from "@/utils/useToast";
import BottomSheetContent from "./BottomSheetContent";
import { useSnsLinkStore } from "./store/link-store";
import { Platforms } from "@/types/platform";
import accountService from "@/lib/api/service/AccountService";
import { useSheetStore } from "@/app/(main)/new-content/_components/store/sheet-store";

const snsList = [
  {
    name: "Instagram",
  },
  {
    name: "Thread",
  },
  {
    name: "Facebook",
  },
];

export const ConnectSocialStep = () => {
  const { selected } = useSelectedSocialStore();
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2>(1);
  const { setIsOpen } = useSheetStore();
  const { setLinked } = useSnsLinkStore();

  const selectedSns = snsList.find(sns => sns.name === selected);

  const handleClick = async () => {
    setIsOpen(true);
    setStep(2);

    // api는 배포돼야 확인이 가능해서 머지되고 되는지 볼게요
    try {
      if (selectedSns?.name) {
        const key = selectedSns.name.toLowerCase() as Platforms;
        setLinked(key, true);
      }

      if (selectedSns?.name === "Thread") {
        await accountService.threads();
      } else if (selectedSns?.name === "Facebook") {
        await accountService.facebook();
      } else if (selectedSns?.name === "Instagram") {
        console.log("Instagram login not implemented yet");
      }
    } catch (err) {
      toast({
        variant: "error",
        description: `${selectedSns?.name} 로그인에 실패했습니다.`,
      });
    }
  };

  if (step === 2) {
    return (
      <>
        <SocialLogin />
        <BottomSheetContent platform={selectedSns?.name} />
      </>
    );
  }

  return (
    <>
      <section className="relative mt-[106px] flex flex-col gap-12">
        <p className="text-t3 text-grayscale-900">계정을 연결할 플랫폼을 선택해주세요.</p>
        <SocialSelect />
      </section>
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
        <Button
          className="w-full"
          variant={selected ? "active" : "deactive"}
          disabled={!selected}
          onClick={handleClick}>
          다음
        </Button>
      </div>
    </>
  );
};

export default ConnectSocialStep;
