"use client";

import { Fragment, useEffect } from "react";
import { DownLoadPageIcon } from "@/components";
import { DrawerSheet } from "@/components/drawer";
import { usePostStore, useSheetStore } from "../../../store";
import { LoadContentList } from "../../../content";

const LoadContent = () => {
  const { isOpen, setIsOpen } = useSheetStore();
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
        className="mx-auto w-[216px] flex items-center gap-1 px-3 py-2 border rounded-lg border-grayscale-300"
        onClick={() => setIsOpen(true)}>
        <DownLoadPageIcon className="text-grayscale-600" />
        <p className="text-grayscale-600 text-b3M whitespace-nowrap">
          계정에서 콘텐츠 내용 불러오기
        </p>
      </div>
      <DrawerSheet
        contentProps={<LoadContentList />}
        showCloseButton={true}
        className="px-0 pt-8"
      />
    </Fragment>
  );
};

export default LoadContent;
