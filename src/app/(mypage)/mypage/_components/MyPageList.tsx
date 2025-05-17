"use client";

import {
  BellIcon,
  ChevronIcon,
  GoOutIcon,
  ProjectIcon,
  SupportIcon,
  ZaplyGrayLogoIcon,
} from "@/components/icons";
import authService from "@/lib/api/service/AuthService";
import { useToast } from "@/utils/useToast";
import { useRouter } from "next/navigation";

type ListItem = {
  icon: JSX.Element;
  label: string;
  onClick?: () => void;
};

export const MyPageList = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await authService.logout();
      toast({ variant: "check", description: "로그아웃이 완료되었어요." });
      router.push("/sign-in");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const listItems: ListItem[] = [
    {
      icon: <BellIcon className="w-5 h-5 text-grayscale-700" />,
      label: "알림설정",
    },
    {
      icon: <ProjectIcon className="w-[15px] h-5 text-grayscale-700" />,
      label: "약관 및 정책",
    },
    {
      icon: <SupportIcon className="w-5 h-5 text-grayscale-700" />,
      label: "문의하기",
    },
    {
      icon: <GoOutIcon className="w-5 h-5 text-grayscale-700" />,
      label: "로그아웃",
      onClick: handleLogout,
    },
  ];

  return (
    <section className="w-full flex flex-col bg-grayscale-100">
      {listItems.map(({ icon, label, onClick }, index) => (
        <div
          key={index}
          className="w-full py-[14px] flex items-center justify-between cursor-pointer"
          onClick={onClick}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-6 flex items-center justify-center">{icon}</div>
            <p className="text-b2M text-grayscale-900">{label}</p>
          </div>
          <ChevronIcon type="right" className="text-grayscale-600" />
        </div>
      ))}
      <div className="mt-6 flex gap-2 items-center justify-center">
        <ZaplyGrayLogoIcon />
        <p className="text-b4R text-grayscale-400 italic creato-500">Version 1.0</p>
      </div>
    </section>
  );
};

export default MyPageList;
