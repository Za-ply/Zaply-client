import * as React from "react";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/common/vaul";
import { createSheetStore } from "@/stores/store-sheet";

interface DrawerSheetProps {
  contentProps: React.ReactNode;
  showCloseButton?: boolean;
  buttonText?: string;
  className?: string;
  store: ReturnType<typeof createSheetStore>;
}

export function DrawerSheet({
  contentProps,
  showCloseButton = true,
  className,
  store,
}: DrawerSheetProps) {
  const { isOpen, setIsOpen } = store();

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
