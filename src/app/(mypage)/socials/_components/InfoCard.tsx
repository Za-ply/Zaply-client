import { Platforms } from "@/types/platform";
import { platformConfig } from "./config/social-config";
import Image from "next/image";
import { ArrowIcon, CircleCheckIcon, EllipseIcon, ErrorIcon } from "@/components/icons";
import { useSearchParams } from "next/navigation";
import { socialInfo } from "./constants/socialInfo";
import { Button } from "@/components/common/button";

const InfoCard = () => {
  const searchParams = useSearchParams();
  const platformParam = searchParams.get("platform")?.toLowerCase();

  const platformAliasMap: Record<string, Platforms> = {
    insta: Platforms.INSTAGRAM,
    instagram: Platforms.INSTAGRAM,
    facebook: Platforms.FACEBOOK,
    thread: Platforms.THREADS,
    threads: Platforms.THREADS,
  };

  const platformKey = platformAliasMap[platformParam ?? ""];

  const platformData = socialInfo[platformKey];

  if (!platformData) {
    return (
      <div className="text-center text-b2R text-red-500 mt-20">유효하지 않은 플랫폼입니다.</div>
    );
  }

  return (
    <>
      <article className="mt-[60px] w-full flex flex-col bg-center bg-cover bg-background-blue-green px-3 py-8 rounded-[12px] shadow-drop">
        <div className="flex flex-col gap-2 items-center">
          <Image src={platformData.icon} width={48} height={48} alt="logo" />
          <p className="text-h3 text-blue-blueblack italic creato-700">{platformData.name}</p>
          <div className="w-[80px] h-[32px] bg-grayscale-100 border border-grayscale-300 rounded-[4px] shadow-drop text-b2M text-blue-700 flex items-center justify-center">
            연결 필요
          </div>
        </div>

        {platformData.limitMessage?.show && "title" in platformData.limitMessage && (
          <div className="mt-9 p-4 flex flex-col gap-2">
            <div className="flex gap-1">
              <ErrorIcon className="text-redscale-700 w-5 h-5" />
              <p className="text-redscale-700 text-b3M">{platformData.limitMessage.title}</p>
            </div>
            <div className="flex gap-2 items-center">
              <EllipseIcon className="text-grayscale-600 w-1 h-1" />
              <p className="text-b4M text-grayscale-800">{platformData.limitMessage.description}</p>
            </div>
          </div>
        )}

        <div className={`${!platformData.limitMessage.show ? "mt-9" : ""} p-4 flex flex-col gap-2`}>
          <div className="flex gap-1">
            <CircleCheckIcon className="text-blue-700 w-5 h-5" />
            <p className="text-blue-700 text-b3M">이런 분들께 추천드려요</p>
          </div>
          <div className="flex flex-col gap-1">
            {platformData.recommendations.map((text, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <EllipseIcon className="text-blue-800 w-1 h-1" />
                <p className="text-b4M text-grayscale-800">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <div className="flex gap-1">
            <CircleCheckIcon className="text-blue-700 w-5 h-5" />
            <p className="text-blue-700 text-b3M">이 플랫폼과 함께 하면 효과가 2배!</p>
          </div>
          <div className="flex gap-2">
            {platformData.synergy.map(p => (
              <div key={p} className="flex gap-1 items-center px-2 py-1 bg-blue-300 rounded-[4px]">
                <Image src={platformConfig[p].icon} width={20} height={20} alt="logo" />
                <p className="text-b4M text-grayscale-900">{platformConfig[p].name}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50 flex flex-col gap-3">
        <div className="p-[1px] rounded-full bg-b700-g700">
          <Button variant="subAction" className="w-full " rightIcon={<ArrowIcon type="right" />}>
            계정 연동하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
