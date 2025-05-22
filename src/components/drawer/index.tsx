import * as React from "react";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/common/vaul";
import { useSheetStore } from "@/app/(main)/new-content/_components/store";

interface DrawerSheetProps {
  contentProps: React.ReactNode;
  showCloseButton?: boolean;
  buttonText?: string;
  className?: string;
}

export function DrawerSheet({ contentProps, showCloseButton = true, className }: DrawerSheetProps) {
  const { isOpen, setIsOpen } = useSheetStore();

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTitle className="hidden" />
      <DrawerContent
        showCloseIcon={showCloseButton}
        className={className}
        onClick={() => setIsOpen(false)}>
        {contentProps}
      </DrawerContent>
    </Drawer>
  );
}
