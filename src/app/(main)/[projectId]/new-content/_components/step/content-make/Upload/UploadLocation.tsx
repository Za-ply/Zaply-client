"use client";

import { Platforms } from "@/types/platform";
import PlatformButton from "../PlatfomButton";
import { HelpIcon } from "@/components";
import { selectSheetStore } from "../../../store/select-sheet-store";
import { SheetOptions } from "@/constants/sheet-options";
import { DrawerSheet } from "@/components/drawer";
import UploadReserve from "../../../content/UploadReserve";

const UploadLocation = () => {
  const store = selectSheetStore[SheetOptions.UPLOAD_LOCATION];
  const { setIsOpen } = store();

  return (
    <div className="flex flex-col gap-2 pb-[179px] cursor-default">
      <div className="flex items-center justify-start gap-2">
        <p className="text-grayscale-800 text-t4">어디에 업로드할까요?</p>
        <HelpIcon
          className="w-5 h-5 cursor-pointer text-grayscale-500"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div className="bg-grayscale-200 rounded-lg w-full h-[120px] p-5 my-[6px]">
        <div className="flex items-center gap-[17.5px] justify-center">
          {mockData.map((pl, index) => (
            <PlatformButton
              key={index}
              type="upload"
              isAccountConnected={pl.isAccountConnected}
              platform={pl.platform}
              hasProfileImage={pl.hasProfileImage}
            />
          ))}
        </div>
      </div>
      {/* <p className="text-grayscale-600 text-b4R">
        *계정 연결이 되지 않은 플랫폼의 경우 내용만 생성해드립니다.
      </p> */}
      <DrawerSheet
        contentProps={<UploadReserve />}
        showCloseButton={true}
        store={selectSheetStore[SheetOptions.UPLOAD_LOCATION]}
      />
    </div>
  );
};

export default UploadLocation;

/** 임시 더미 데이터 */
export const mockData = [
  {
    isAccountConnected: true,
    platform: Platforms.INSTAGRAM,
    hasProfileImage: true,
  },
  {
    isAccountConnected: true,
    platform: Platforms.THREADS,
    hasProfileImage: true,
  },
  {
    isAccountConnected: true,
    platform: Platforms.FACEBOOK,
    hasProfileImage: false,
  },
  {
    isAccountConnected: false,
    platform: Platforms.X,
    hasProfileImage: false,
  },
  {
    isAccountConnected: false,
    platform: Platforms.LINKEDIN,
    hasProfileImage: false,
  },
];
