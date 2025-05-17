"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/common/sheet";
import { useSheetStore } from "../../store/sheet-store";

interface BottomSheetProps {
  children: React.ReactNode;
  showCloseButton?: boolean;
  className?: string;
}

const BottomSheet = ({ children, showCloseButton = true, className = "" }: BottomSheetProps) => {
  const { isOpen, setIsOpen } = useSheetStore();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        className={`max-w-[440px] mx-auto pt-8 pb-[60px] px-5 shadow-bnb ${className}`}
        showCloseButton={showCloseButton}>
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
