import BottomContent from "./BottomContent";
// import Continue from "./Continue";
import HeaderContent from "./HeaderContent";
import PlatformList from "./PlatformList";

const PlatformSelectStep = () => {
  return (
    <div className="pt-10">
      <div>
        <HeaderContent />
        <div className="mt-12">
          <PlatformList />
        </div>
        {/* <Continue /> */}
      </div>
      <BottomContent />
    </div>
  );
};

export default PlatformSelectStep;
