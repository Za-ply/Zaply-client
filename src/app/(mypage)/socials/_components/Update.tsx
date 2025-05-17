import Image from "next/image";
import { xMono, linkedinMono, youtubeMono, tiktokMono } from "@public/assets/images/sns";

const Update = () => {
  return (
    <div
      className={`flex flex-col gap-2 border border-grayscale-300 bg-grayscale-200 rounded-[12px] py-3 px-5`}>
      <p className="text-left whitespace-pre-line text-b4R text-grayscale-600">
        {`더 많은 플랫폼에 대해서는 베타 테스트 이후 기능을 제공할 예정이\n에요. 재플리의 업데이트 소식을 기다려주세요:)`}
      </p>
      <div className="flex items-center justify-end gap-2">
        <Image src={xMono} alt="x" width={24} height={24} />
        <Image src={linkedinMono} alt="linkedin" width={24} height={24} />
        <Image src={youtubeMono} alt="youtube" width={24} height={24} />
        <Image src={tiktokMono} alt="tiktok" width={24} height={24} />
      </div>
    </div>
  );
};

export default Update;
