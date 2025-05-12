"use client";

import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { BottomSheet, Button } from "@/components";
import { usePlatformStore } from "../../store";
import { InfoMainPlatform } from "../../common";

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
