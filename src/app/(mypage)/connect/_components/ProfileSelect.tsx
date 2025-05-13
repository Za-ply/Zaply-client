import { useState } from "react";
import { CircleCheckBoldIcon, CircleIcon } from "@/components/icons";
import SnsProfile, { SnsType } from "../../mypage/_components/SnsProfile";
import { cn } from "@/utils";
import { useSelectedSocialStore } from "./store/social-store";

type Profile = {
  id: number;
  username: string;
  label: string;
};

const dummyProfiles: Profile[] = [
  {
    id: 1,
    username: "@username1",
    label: "비즈니스 계정",
  },
  {
    id: 2,
    username: "@username2",
    label: "비즈니스 계정",
  },
  {
    id: 3,
    username: "@username3",
    label: "비즈니스 계정",
  },
];

type ProfileSelectProps = {
  selectedId: number | null;
  onSelect: (id: number) => void;
};

export const ProfileSelect = ({ selectedId, onSelect }: ProfileSelectProps) => {
  const selected = useSelectedSocialStore(state => state.selected);

  return (
    <div className="flex flex-col gap-4 w-full">
      {dummyProfiles.map(profile => (
        <div
          key={profile.id}
          onClick={() => onSelect(profile.id)}
          className={cn(
            "w-full p-3 flex items-center justify-between rounded-[8px] border border-grayscale-200 shadow-box cursor-pointer transition-all duration-300 ease-in-out",
            profile.id === selectedId && "border-blue-700"
          )}>
          <div className="flex gap-3 items-center">
            <SnsProfile type={selected?.toLowerCase() as SnsType} isLinked={true} />
            <div className="flex flex-col gap-[2px]">
              <p className="text-b2M text-grayscale-900">{profile.username}</p>
              <p className="text-b4R text-grayscale-600">{profile.label}</p>
            </div>
          </div>
          <span
            className={cn(
              "transition-all duration-300 ease-in-out transform",
              profile.id === selectedId
                ? "text-blue-700 scale-100 opacity-100"
                : "text-grayscale-400 scale-90 opacity-80"
            )}>
            {profile.id === selectedId ? <CircleCheckBoldIcon /> : <CircleIcon />}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProfileSelect;
