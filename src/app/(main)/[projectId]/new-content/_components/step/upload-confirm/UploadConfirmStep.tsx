import ContentTitle from "./ContentTitle";
import PlatformSelect from "./PlatformSelect";

const UploadConfirmStep = () => {
  return (
    <div className="flex flex-col justify-between h-full pt-10 pb-12 overflow-y-auto scrollbar-hide">
      <ContentTitle />
      <span className="w-full h-[1px] bg-grayscale-300 my-6" />
      <PlatformSelect />
    </div>
  );
};

export default UploadConfirmStep;
