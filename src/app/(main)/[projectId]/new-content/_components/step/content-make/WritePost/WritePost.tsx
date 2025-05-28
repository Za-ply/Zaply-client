"use client";

import WriteContent from "../../../common/WriteContent";
import { policyConfig } from "../../../config/constraint-config";
import { usePlatformStore } from "../../../store";

const WritePost = () => {
  const { selectedPlatform } = usePlatformStore();
  const { maxContentLength } =
    selectedPlatform !== null ? policyConfig[selectedPlatform] : { maxContentLength: 0 };

  return <WriteContent type="upload" maxContentLength={maxContentLength} />;
};

export default WritePost;
