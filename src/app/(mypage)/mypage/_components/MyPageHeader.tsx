"use client";

import { Button } from "@/components";
import SocialCard from "./SocialCard";
import useUserStore from "@/stores/userStore";
import useFetchMemberInfo from "@/app/(main)/main/_components/hooks/useFetchMemberInfo";

export const MyPageHeader = () => {
  useFetchMemberInfo();
  const { email, name } = useUserStore(state => state.userInfo ?? { email: "", name: "" });

  return (
    <header className="mt-[45px] w-full flex flex-col gap-7">
      <div className="flex items-center justify-between px-3">
        <div className="flex flex-col">
          <p className="text-t1 text-grayscale-900">{name}님</p>
          <p className="italic text-blue-900 text-b4M creato-500">{email}</p>
        </div>
        <Button
          variant="subAction"
          className="w-[80px] h-[32px] rounded-md text-b2M text-blue-700 border border-blue-300 shadow-drop">
          계정 관리
        </Button>
      </div>
      <SocialCard />
    </header>
  );
};

export default MyPageHeader;
