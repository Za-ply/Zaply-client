"use client";

import ContentItem from "./ContentItem";
import { useContentStore } from "@/stores/useContentStore";
import { useProjects } from "../hooks/useProjects";
import { useEffect } from "react";

const ContentList = () => {
  const activeTab = useContentStore(state => state.activeTab);
  const setProjects = useContentStore(state => state.setProjects);
  const setCounts = useContentStore(state => state.setCounts);
  const { data, isLoading, isError } = useProjects();
  const now = new Date();

  useEffect(() => {
    if (data?.data) {
      setProjects(data.data);

      const reserved = data.data.filter(item => new Date(item.earliestScheduledAt) > now).length;
      const recent = data.data.filter(item => new Date(item.earliestScheduledAt) <= now).length;
      setCounts({ reserved, recent });
    }
  }, [data, setProjects, setCounts, now]);

  if (isLoading) {
    return (
      <div className="w-full h-[56px] bg-grayscale-100/80 text-center text-b2R text-grayscale-600 rounded-[12px] shadow-drop flex items-center justify-center">
        콘텐츠를 불러오는 중입니다...
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div className="w-full h-[56px] bg-grayscale-100/80 text-center text-b2R text-grayscale-600 rounded-[12px] shadow-drop flex items-center justify-center">
        콘텐츠를 불러오지 못했어요.
      </div>
    );
  }

  const projects = data.data
    .filter(item => {
      const published = new Date(item.earliestScheduledAt);
      return activeTab === "reserved" ? published > now : published <= now;
    })
    .sort((a, b) => {
      const dateA = new Date(a.earliestScheduledAt).getTime();
      const dateB = new Date(b.earliestScheduledAt).getTime();
      return activeTab === "reserved" ? dateA - dateB : dateB - dateA;
    })
    .slice(0, 3);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {projects.length === 0 ? (
        <div className="w-full h-[56px] bg-grayscale-100/80 text-center text-b2R text-grayscale-600 rounded-[12px] shadow-drop flex items-center justify-center">
          현재 콘텐츠가 없어요.
        </div>
      ) : (
        projects.map((_, index) => <ContentItem key={index} index={index} />)
      )}
      {projects.length > 0 && (
        <button className="mt-2 w-[84px] h-[34px] text-center text-b3M text-grayscale-500 rounded-full bg-grayscale-100 shadow-drop">
          전체보기
        </button>
      )}
    </div>
  );
};

export default ContentList;
