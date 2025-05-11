import { useEffect } from "react";
import ContentList from "./ContentList";
import ContentToggle from "./ContentToggle";
import { useContentStore } from "@/stores/useContentStore";
import { contentItemsMock } from "../mocks/contentItems";

const MainContent = () => {
  const now = new Date();
  const setCounts = useContentStore(state => state.setCounts);

  useEffect(() => {
    const reserved = contentItemsMock.filter(item => new Date(item.publishedAt) > now).length;
    const recent = contentItemsMock.filter(item => new Date(item.publishedAt) <= now).length;

    setCounts({ reserved, recent });
  }, [setCounts, now]);

  return (
    <main className="flex flex-col h-full gap-4">
      <ContentToggle />
      <ContentList />
    </main>
  );
};

export default MainContent;
