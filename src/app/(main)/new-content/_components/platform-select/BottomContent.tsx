"use client";

import { Fragment } from "react";
import { Button } from "@/components/common/button";
import BottomSheet from "@/components/common/sheet/BottomSheet";
import { useRouter } from "next/navigation";
import { usePlatformStore } from "../store/platform-store";
import InfoMainPlatform from "../sheet-content/InfoMainPlatform";

const BottomContent = () => {
  const router = useRouter();
  const { selectedPlatform, selectedCategory } = usePlatformStore();

  return (
    <Fragment>
      <Button
        variant={selectedPlatform && selectedCategory ? "active" : "deactive"}
        className="absolute bottom-[60px] left-0 right-0 mx-auto w-[calc(100%-40px)]"
        onClick={() => router.push("/new-content?step=2")}>
        다음
      </Button>
      <BottomSheet>
        <InfoMainPlatform />
      </BottomSheet>
    </Fragment>
  );
};

export default BottomContent;
