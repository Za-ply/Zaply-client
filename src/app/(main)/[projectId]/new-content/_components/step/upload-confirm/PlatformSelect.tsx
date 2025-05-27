"use client";

import { Fragment, useEffect, useState } from "react";
import { useContentMakeStore } from "../../store/content-make-store";
import PlatformButton from "../content-make/PlatfomButton";
import { Platforms } from "@/types/platform";
import { useSNSTransferStore } from "../../store/sns-transfer-store";
import WriteContent from "../../common/WriteContent";
import { searchOptions } from "@/constants/search-options";

const PlatformSelect = () => {
  const { postData, selectedContentPlatform } = useContentMakeStore();
  const { snsTransferRequest } = useSNSTransferStore();

  const [transferPrompt, setTransferPrompt] = useState<string>("");

  useEffect(() => {
    if (selectedContentPlatform) {
      const readContent = searchOptions.filter(item => item.value === selectedContentPlatform)[0]
        .name;

      const transferContent = snsTransferRequest.find(sr =>
        sr.snsTypes.includes(readContent as Platforms)
      )?.userPrompt;

      setTransferPrompt(transferContent as string);
    }
  }, [selectedContentPlatform]);

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
      <WriteContent type="content" maxContentLength={1000} transferPrompt={transferPrompt} />
    </Fragment>
  );
};

export default PlatformSelect;
