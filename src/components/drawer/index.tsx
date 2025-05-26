import * as React from "react";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/common/vaul";
import { createSheetStore } from "@/stores/store-sheet";

interface DrawerSheetProps {
  contentProps: React.ReactNode;
  showCloseButton?: boolean;
  buttonText?: string;
  className?: string;
  store: ReturnType<typeof createSheetStore>;
  // onClick?: () => void;
}

export function DrawerSheet({
  contentProps,
  showCloseButton = true,
  className,
  store,
  /**
   * @deprecated
   * 콘솔 에러가 발생하여 임시 주석 처리
   */
  // onClick = () => store().setIsOpen(false),
}: DrawerSheetProps) {
  const { isOpen, setIsOpen } = store();

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTitle className="hidden" />
      <DrawerContent showCloseIcon={showCloseButton} className={className}>
        {contentProps}
      </DrawerContent>
    </Drawer>
  );
}
