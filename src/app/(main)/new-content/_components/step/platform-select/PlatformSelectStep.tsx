import BottomContent from "./BottomContent";
import Continue from "./Continue";
import HeaderContent from "./HeaderContent";
import PlatformList from "./PlatformList";

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
