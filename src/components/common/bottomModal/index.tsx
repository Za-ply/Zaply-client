import Button from "../button";
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
  mainBtn?: string;
  subBtn?: string;
  children?: React.ReactNode;
  className?: string;
  onOpenChange?: (open: boolean) => void;
  onCloseIconClick?: () => void;
  onMainBtnClick?: () => void;
  onSubBtnClick?: () => void;
}

const BottomModal = ({
  isOpen,
  onOpenChange,
  onCloseIconClick,
  showCloseIcon = true,
  title = "",
  description = "",
  mainBtn,
  subBtn,
  children,
  className,
  onMainBtnClick,
  onSubBtnClick,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        style={{ width: "350px", height: "374px" }}
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
          <div className="flex flex-col w-full gap-1">
            <Button onClick={onMainBtnClick}>{mainBtn}</Button>
            <Button
              variant="deactive"
              className="border-none bg-grayscale-100 text-grayscale-500"
              onClick={onSubBtnClick}>
              {subBtn}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BottomModal;
