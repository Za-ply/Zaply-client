import CollapsibleReservationContent from "./CollapsibleReservationContent";
import CollapsibleReservationTime from "./CollapsibleReservationTime";

export const UpdateReservationContent = () => {
  return (
    <section className="w-full flex flex-col gap-3 mt-[60px] bg-grayscale-200">
      <CollapsibleReservationContent />
      <CollapsibleReservationTime />
    </section>
  );
};

export default UpdateReservationContent;
