"use client";

import ContentItem from "../../main/_components/content/ContentItem";
import { useProjects } from "../../main/_components/hooks/useProjects";
import { useRouter } from "next/navigation";

export const ReservedContents = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useProjects();
  const currentDate = new Date();

  const handleItemClick = (projectId: number) => {
    router.push(`/reserved-contents/${projectId}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[200px] text-grayscale-600">
        콘텐츠를 불러오는 중입니다...
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div className="flex items-center justify-center h-[200px] text-grayscale-600">
        콘텐츠를 불러오지 못했어요.
      </div>
    );
  }

  const reservedProjects = data.data.filter(project => {
    const scheduledDate = new Date(project.earliestScheduledAt);
    return scheduledDate > currentDate;
  });

  if (!reservedProjects.length) {
    return (
      <div className="flex items-center justify-center h-[200px] text-grayscale-600">
        예약된 콘텐츠가 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 mt-[80px]">
      {reservedProjects.map(project => (
        <ContentItem key={project.projectId} project={project} onClick={handleItemClick} />
      ))}
    </div>
  );
};

export default ReservedContents;
