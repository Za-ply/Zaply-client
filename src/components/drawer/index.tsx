import * as React from "react";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/common/vaul";
import { createSheetStore } from "@/stores/store-sheet";

interface DrawerSheetProps {
  contentProps: React.ReactNode;
  showCloseButton?: boolean;
  buttonText?: string;
  className?: string;
  store: ReturnType<typeof createSheetStore>;
  onClick?: () => void;
}

export function DrawerSheet({
  contentProps,
  showCloseButton = true,
  className,
  store,
  onClick = () => store().setIsOpen(false),
}: DrawerSheetProps) {
  const { isOpen, setIsOpen } = store();

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTitle className="hidden" />
      <DrawerContent showCloseIcon={showCloseButton} className={className} onClick={onClick}>
        {contentProps}
      </DrawerContent>
    </Drawer>
  );
}
