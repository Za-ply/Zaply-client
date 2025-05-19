import * as React from "react";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/common/vaul";
import { useSheetStore } from "@/app/(main)/new-content/_components/store";

interface DrawerSheetProps {
  contentProps: React.ReactNode;
  showCloseButton?: boolean;
  buttonText?: string;
}

export function DrawerSheet({ contentProps, showCloseButton = true }: DrawerSheetProps) {
  const { isOpen, setIsOpen } = useSheetStore();

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTitle className="hidden" />
      <DrawerContent showCloseIcon={showCloseButton}>{contentProps}</DrawerContent>
    </Drawer>
  );
}
