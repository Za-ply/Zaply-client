import { CircleIcon } from "@/components/icons";
import SnsProfile, { SnsType } from "../../mypage/_components/SnsProfile";
import { useSelectedSocialStore } from "./store/social-store";

export const ProfileSelect = () => {
  const selected = useSelectedSocialStore(state => state.selected);

  return (
    <div className="w-full p-3 flex items-center justify-between rounded-[8px] border border-grayscale-200 shadow-drop">
      <div className="flex gap-3 items-center">
        {selected && <SnsProfile type={selected.toLowerCase() as SnsType} isLinked={true} />}
        <div className="flex flex-col gap-[2px]">
          <p className="text-b2M text-grayscale-900">@username1</p>
          <p className="text-b4R text-grayscale-600">비즈니스 계정</p>
        </div>
      </div>
      <CircleIcon className="text-grayscale-400" />
    </div>
  );
};

export default ProfileSelect;
