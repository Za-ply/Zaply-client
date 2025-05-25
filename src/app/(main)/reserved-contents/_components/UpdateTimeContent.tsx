import { useParams } from "next/navigation";
import { ScheduleSelector } from "../../[projectId]/new-content/_components/step";
import { usePostingInfo } from "./hooks/usePostingInfo";
import { Button, CheckIcon } from "@/components";

export const UpdateTimeContent = () => {
  const { projectId } = useParams();
  const { data: postingInfo } = usePostingInfo(Number(projectId));

  return (
    <section className="w-full flex flex-col mt-[60px]">
      <ScheduleSelector isUpdate={true} posting={postingInfo} />
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
        <Button className="w-full" leftIcon={<CheckIcon />}>
          완료
        </Button>
      </div>
    </section>
  );
};

export default UpdateTimeContent;
