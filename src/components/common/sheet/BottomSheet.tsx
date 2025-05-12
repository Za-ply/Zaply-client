"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/common/sheet";
import { useSheetStore } from "../../../app/(main)/new-content/_components/store/sheet-store";

const BottomSheet = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useSheetStore();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="max-w-[440px] mx-auto pt-8 pb-[60px] px-5 shadow-bnb">
        <SheetHeader>
          <SheetTitle className="hidden" />
          <SheetDescription className="hidden" />
        </SheetHeader>
        <div>{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default BottomSheet;
