import {
  facebook,
  facebookCircle,
  instagram,
  instagramCircle,
  thread,
  threadCircle,
} from "@public/assets/images/sns";
import { useSelectedSocialStore } from "./store/social-store";
import Image from "next/image";
import { Button } from "@/components/common/button";

const snsList = [
  {
    name: "Instagram",
    icon: instagramCircle,
  },
  {
    name: "Thread",
    icon: threadCircle,
  },
  {
    name: "Facebook",
    icon: facebookCircle,
  },
];

export const SocialLogin = () => {
  const { selected } = useSelectedSocialStore();

  const selectedSns = snsList.find(sns => sns.name === selected);

  if (!selectedSns) return null;

  return (
    <div className="flex flex-col justify-between min-h-real-screen pt-[60px] pb-[120px]">
      <div className="flex flex-1 justify-center items-center px-5">
        <section className="flex flex-col items-center gap-2">
          <Image src={selectedSns.icon} width={48} height={48} alt={`${selectedSns.name} logo`} />
          <p className="text-grayscale-800 text-h3 text-center leading-snug">
            {selectedSns.name}에서
            <br />
            로그인해주세요
          </p>
        </section>
      </div>

      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
        <Button variant="subAction" className="w-full">
          로그인 하기
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
