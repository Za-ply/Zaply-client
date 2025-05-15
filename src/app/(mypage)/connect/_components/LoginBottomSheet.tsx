import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/common/sheet";
import { useSheetStore } from "./store/sheet-store";

const LoginBottomSheet = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useSheetStore();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        className="max-w-[440px] h-[calc(100vh-60px)] mx-auto pt-8 pb-[60px] px-5 shadow-drop"
        hideCloseIcon={true}>
        <SheetHeader>
          <SheetTitle className="hidden" />
          <SheetDescription className="hidden" />
        </SheetHeader>
        <div>{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default LoginBottomSheet;
