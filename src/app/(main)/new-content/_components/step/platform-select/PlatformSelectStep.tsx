import BottomContent from "./BottomContent";
import Continue from "./Continue";
import HeaderContent from "./HeaderContent";
import PlatformList from "./PlatformList";

const PlatformSelectStep = () => {
  return (
    <div className="flex flex-col justify-between h-full gap-2 pt-10 overflow-y-auto scrollbar-hide">
      <div>
        <HeaderContent />
        <div className="mt-[64px]">
          <PlatformList />
        </div>
        <Continue />
      </div>
      <BottomContent />
    </div>
  );
};

export default PlatformSelectStep;
