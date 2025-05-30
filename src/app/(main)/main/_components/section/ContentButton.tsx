import { PlusIcon } from "@/components/icons";
import { useCreateProject } from "@/hooks/mutation/useProject";
import { useRouter } from "next/navigation";

const ContentButton = () => {
  const router = useRouter();
  const { mutate: createProject } = useCreateProject();

  const handleCreateProject = () => {
    createProject(undefined, {
      onSuccess: data => {
        router.push(`/${data.data}/new-content?step=1`);
      },
    });
  };

  return (
    <div
      className="w-full bg-grayscale-100 rounded-[12px] py-5 px-6 cursor-pointer flex items-center justify-between border-[1.4px] border-blue-700"
      onClick={handleCreateProject}>
      <div className="flex flex-col gap-1">
        <p className="text-t2 text-grayscale-900">새 콘텐츠 만들기</p>
        <p className="italic text-transparent font-creato500 text-t4 bg-gradation-text bg-clip-text">
          Go to Upload New Contents
        </p>
      </div>
      <div className="flex items-center justify-center w-12 h-12 rounded-[12px] bg-gradation-btn">
        <PlusIcon className="text-grayscale-100" />
      </div>
    </div>
  );
};

export default ContentButton;
