import { Continue, HeaderContent, PlatformList } from "../platform-select";
import BottomContent from "../platform-select/BottomContent";

const PlatformSelectStep = () => {
  return (
    <>
      <HeaderContent />
      <div className="mt-[64px]">
        <PlatformList />
      </div>
      <Continue />
      <BottomContent />
    </>
  );
};

export default PlatformSelectStep;
