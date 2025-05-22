"use client";

import { Fragment, useEffect } from "react";
import { DownLoadPageIcon } from "@/components";
import { DrawerSheet } from "@/components/drawer";
import { usePostStore } from "../../../store";
import { LoadContentList } from "../../../content";
import { selectSheetStore } from "../../../store/select-sheet-store";
import { SheetOptions } from "@/constants/sheet-options";

const LoadContent = () => {
  const store = selectSheetStore[SheetOptions.LOAD_POST];
  const { isOpen, setIsOpen } = store();
  const { setSelectPostList, setViewType, setIsShowDetail } = usePostStore();

  useEffect(() => {
    if (!isOpen) {
      setSelectPostList(null);
      setViewType("vertical");
      setIsShowDetail(false);
    }
  }, [isOpen]);

  return (
    <Fragment>
      <div
        className="w-[97px] flex items-center gap-1 px-3 py-[6px] rounded-full bg-blue-300 text-blue-700"
        onClick={() => setIsOpen(true)}>
        <DownLoadPageIcon />
        <p className="text-b3M">불러오기</p>
      </div>
      <DrawerSheet
        contentProps={<LoadContentList />}
        showCloseButton={true}
        className="px-0 pt-8"
        store={selectSheetStore[SheetOptions.LOAD_POST]}
      />
    </Fragment>
  );
};

export default LoadContent;
