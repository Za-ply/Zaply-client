import { Dialog, DialogContent } from "@/components/common/dialog";
import { EllipseIcon } from "@/components";

interface LoadingModalProps {
  isOpen: boolean;
  isReserve?: boolean;
}

const LoadingModal = ({ isOpen, isReserve = false }: LoadingModalProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent
        showCloseIcon={false}
        className="flex flex-col items-center justify-cente py-[178px] pb-8 bg-b300-g100-loading shadow-xl rounded-[20px] w-[350px]">
        <div className="flex flex-col items-center justify-center gap-1 w-full">
          <p className="text-h3 text-blue-blueblack font-bold">
            {isReserve ? "콘텐츠를 예약하고 있어요." : "콘텐츠를 업로드하고 있어요."}
          </p>
          <p className="text-b2M text-grayscale-600">잠시만 기다려주세요!</p>
        </div>
        <div className="flex items-center gap-2">
          <EllipseIcon className="w-2 h-2 animate-[bounce_1s_infinite_0ms,colorChange_1s_infinite_0ms]" />
          <EllipseIcon className="w-2 h-2 animate-[bounce_1s_infinite_300ms,colorChange_1s_infinite_300ms]" />
          <EllipseIcon className="w-2 h-2 animate-[bounce_1s_infinite_600ms,colorChange_1s_infinite_600ms]" />
          <EllipseIcon className="w-2 h-2 animate-[bounce_1s_infinite_900ms,colorChange_1s_infinite_900ms]" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
