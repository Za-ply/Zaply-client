import { Button } from "@/components/common/button";
import SocialCard from "./SocialCard";

export const MyPageHeader = () => {
  return (
    <header className="mt-[45px] w-full flex flex-col gap-7">
      <div className="px-3 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-t1 text-grayscale-900">박민영님</p>
          <p className="text-b4M italic creato-500 text-blue-900">
            zaplyservice.official@gmail.com
          </p>
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
