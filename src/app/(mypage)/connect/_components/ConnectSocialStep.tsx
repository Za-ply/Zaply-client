import { Button } from "@/components";
import SocialSelect from "./SocialSelect";
import { useSelectedSocialStore } from "./store/social-store";

interface ConnectSocialStep {
  onNext: () => void;
}

export const ConnectSocialStep = ({ onNext }: ConnectSocialStep) => {
  const { selected } = useSelectedSocialStore();
  return (
    <>
      <section className="relative mt-[106px] flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <p className="text-blue-700 text-t4">
            1<span className="text-grayscale-400">/2</span>
          </p>
          <p className="text-t3 text-grayscale-900">계정을 연결할 플랫폼을 선택해주세요.</p>
        </div>
        <SocialSelect />
      </section>
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
        <Button
          className="w-full"
          onClick={onNext}
          variant={selected ? "active" : "deactive"}
          disabled={!selected}>
          다음
        </Button>
      </div>
    </>
  );
};

export default ConnectSocialStep;
