import { Button, CheckIcon } from "@/components";
import { SelectUploadType } from "./SelectUploadType";

const ReserveStep = () => {
  return (
    <>
      <SelectUploadType />
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
        <Button className="w-full text-button1 text-grayscale-100" leftIcon={<CheckIcon />}>
          완료
        </Button>
      </div>
    </>
  );
};

export default ReserveStep;
