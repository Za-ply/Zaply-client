import { cn } from "@/utils";
import { Button } from "../button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../dialog";

interface ModalProps {
  isOpen?: boolean;
  title?: string;
  description?: string;
  buttonType?: "single" | "multi";
  showCloseIcon?: boolean;
  isDisabledButton?: boolean;
  leftText?: string;
  rightText?: string;
  leftClassName?: string;
  rightClassName?: string;
  width?: string;
  children?: React.ReactNode;
  className?: string;
  onOpenChange?: (open: boolean) => void;
  onCloseIconClick?: () => void;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
}

const Modal = ({
  isOpen,
  onOpenChange,
  onCloseIconClick,
  width,
  showCloseIcon = true,
  title = "",
  description = "",
  children,
  buttonType,
  leftText = "취소",
  rightText = "완료",
  className,
  onLeftButtonClick,
  onRightButtonClick,
  leftClassName,
  rightClassName,
  isDisabledButton = false,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        style={{ maxWidth: width ? `${width}px` : undefined }}
        showCloseIcon={showCloseIcon}
        className={className}
        onClose={onCloseIconClick}>
        <DialogHeader>
          <DialogTitle className={`${title?.length === 0 ? "hidden" : ""}`}>{title}</DialogTitle>
          {description && (
            <DialogDescription className={`${description?.length === 0 ? "hidden" : ""}`}>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="flex items-center justify-center text-lg font-medium leading-[26px] tracking-tighter">
          {children}
        </div>

        <DialogFooter>
          {buttonType === "single" && (
            <Button
              type="button"
              className="rounded-[100px] py-[6px] px-10"
              onClick={onRightButtonClick}
              disabled={isDisabledButton}>
              확인
            </Button>
          )}
          {buttonType === "multi" && (
            <>
              <Button
                type="button"
                className={cn(
                  "whitespace-nowrap text-button1 bg-grayscale-500 text-grayscale-100 rounded-[100px] ",
                  leftClassName
                )}
                onClick={onLeftButtonClick}>
                {leftText}
              </Button>
              <Button
                type="button"
                className={cn(
                  "whitespace-nowrap text-button1 bg-blue-blueblack text-grayscale-100 rounded-[100px] ",
                  rightClassName
                )}
                onClick={onRightButtonClick}
                disabled={isDisabledButton}>
                {rightText}
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
