"use client";

import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { usePlatformStore } from "../../store";
import { InfoMainPlatform } from "../../content";
import { Button } from "@/components";
import { DrawerSheet } from "@/components/drawer";
import { selectSheetStore } from "../../store/select-sheet-store";
import { SheetOptions } from "@/constants/sheet-options";

const BottomContent = () => {
  const router = useRouter();
  const { selectedPlatform, selectedCategory } = usePlatformStore();

  return (
    <Fragment>
      <Button
        variant={selectedPlatform && selectedCategory ? "active" : "deactive"}
        onClick={() => router.push("/new-content?step=2")}
        className="absolute bottom-[60px] left-0 right-0 max-w-[calc(100%-40px)] mx-auto"
        disabled={!selectedPlatform || !selectedCategory}>
        다음
      </Button>
      <DrawerSheet
        contentProps={<InfoMainPlatform />}
        showCloseButton={true}
        store={selectSheetStore[SheetOptions.MAIN_PLATFORM]}
      />
    </Fragment>
  );
};

export default BottomContent;
