"use client";

import { Fragment } from "react";
import { useContentMakeStore } from "../../store/content-make-store";
import PlatformButton from "../content-make/PlatfomButton";
import { Platforms } from "@/types/platform";

const PlatformSelect = () => {
  const { postData } = useContentMakeStore();

  return (
    <Fragment>
      <p className="text-b3M text-grayscale-900">플랫폼별 콘텐츠 내용</p>
      <div className="flex items-center justify-start gap-3 mt-4 mb-6">
        {postData.uploadPlatforms.map((platform, index) => (
          <PlatformButton
            key={platform}
            isFirst={index === 0}
            type="content"
            isAccountConnected={
              platform === Platforms.X || platform === Platforms.LINKEDIN ? false : true
            }
            platform={platform}
            hasProfileImage={true}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default PlatformSelect;
