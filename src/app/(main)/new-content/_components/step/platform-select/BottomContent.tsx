"use client";

import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { usePlatformStore } from "../../store";
import { InfoMainPlatform } from "../../common";
import { Button } from "@/components";
import BottomSheet from "./BottomSheet";

const BottomContent = () => {
  const router = useRouter();
  const { selectedPlatform, selectedCategory } = usePlatformStore();

  return (
    <Fragment>
      <Button
        variant={selectedPlatform && selectedCategory ? "active" : "deactive"}
        className="mb-[60px]"
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
