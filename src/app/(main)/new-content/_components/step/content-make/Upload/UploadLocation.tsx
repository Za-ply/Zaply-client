import { Platforms } from "@/types/platform";
import PlatformButton from "../PlatfomButton";

const UploadLocation = () => {
  const mockData = [
    {
      isAccountConnected: true,
      platform: Platforms.INSTAGRAM,
      hadProfileImage: true,
    },
    {
      isAccountConnected: true,
      platform: Platforms.THREADS,
      hadProfileImage: true,
    },
    {
      isAccountConnected: true,
      platform: Platforms.FACEBOOK,
      hadProfileImage: false,
    },
    {
      isAccountConnected: false,
      platform: Platforms.X,
      hadProfileImage: false,
    },
    {
      isAccountConnected: false,
      platform: Platforms.LINKEDIN,
      hadProfileImage: false,
    },
  ];

  return (
    <div className="flex flex-col gap-2 pb-[179px]">
      <p className="text-grayscale-800 text-t4">업로드 위치</p>
      <p className="text-b3M text-grayscale-700">
        입력된 내용을 다른 플랫폼에도 알맞게 변환해드려요.
      </p>
      <div className="bg-grayscale-200 rounded-lg w-full h-[120px] p-5 my-[6px]">
        <div className="flex items-center gap-[17.5px] justify-center">
          {mockData.map((pl, index) => (
            <PlatformButton
              key={index}
              isAccountConnected={pl.isAccountConnected}
              platform={pl.platform}
              hadProfileImage={pl.hadProfileImage}
            />
          ))}
        </div>
      </div>
      <p className="text-grayscale-600 text-b4R">
        *계정 연결이 되지 않은 플랫폼의 경우 내용만 생성해드립니다.
      </p>
    </div>
  );
};

export default UploadLocation;
