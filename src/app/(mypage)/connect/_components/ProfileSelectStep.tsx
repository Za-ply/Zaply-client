import { Button } from "@/components/common/button";
import ProfileSelect from "./ProfileSelect";

export const ProfileSelectStep = () => {
  return (
    <section className="relative mt-[106px] flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <p className="text-t4 text-blue-700">
          2<span className="text-grayscale-400">/2</span>
        </p>
        <p className="text-t3 text-grayscale-900">연결할 계정을 선택해주세요.</p>
      </div>
      <ProfileSelect />
      <Button className="mt-[197px]">다음</Button>
    </section>
  );
};

export default ProfileSelectStep;
