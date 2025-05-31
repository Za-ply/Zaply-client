"use client";

import {
  BellIcon,
  ChevronIcon,
  GoOutIcon,
  ProjectIcon,
  SupportIcon,
  ZaplyGrayLogoIcon,
} from "@/components/icons";
import { useUserLogout } from "@/hooks/mutation";
import { useRouter } from "next/navigation";

type ListItem = {
  icon: JSX.Element;
  label: string;
  onClick?: () => void;
};

export const MyPageList = () => {
  const router = useRouter();
  const { mutate: logout } = useUserLogout();

  // const handleLogout = async () => {
  //   try {
  //     await authService.logout();
  //     tokenManager.removeTokens();
  //     router.push("/sign-in");
  //   } catch (error) {
  //     console.error("로그아웃 실패:", error);
  //   }
  // };
  const handleLogout = () => {
    logout();
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
    <section className="flex flex-col w-full bg-grayscale-100">
      {listItems.map(({ icon, label, onClick }, index) => (
        <div
          key={index}
          className="w-full py-[14px] flex items-center justify-between cursor-pointer"
          onClick={onClick}>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-6">{icon}</div>
            <p className="text-b2M text-grayscale-900">{label}</p>
          </div>
          <ChevronIcon type="right" className="text-grayscale-600" />
        </div>
      ))}
      <div className="flex items-center justify-center gap-2 mt-6">
        <ZaplyGrayLogoIcon />
        <p className="italic text-b4R text-grayscale-400 creato-500">Version 1.0</p>
      </div>
    </section>
  );
};

export default MyPageList;
