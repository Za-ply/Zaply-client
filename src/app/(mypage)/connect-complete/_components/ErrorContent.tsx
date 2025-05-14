import { useSelectedSocialStore } from "../../connect/_components/store/social-store";
import SnsProfile, { SnsType } from "../../mypage/_components/SnsProfile";

export const ErrorContent = () => {
  const { selected } = useSelectedSocialStore();

  return (
    <section className="pt-[194px] flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center gap-1">
        <SnsProfile
          type={selected?.toLowerCase() as SnsType}
          className="border-[2.8px] border-redscale-700"
        />
        <p className="text-b2M text-grayscale-600 italic creato-500">@username1</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-h3 text-grayscale-900">계정이 연결에 실패했어요.</p>
        <p className="text-b2R text-grayscale-700">다시 시도해주세요.</p>
      </div>
    </section>
  );
};

export default ErrorContent;
