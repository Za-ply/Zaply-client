import ContentItem from "./ContentItem";
import { useContentStore } from "@/stores/useContentStore";
import { contentItemsMock } from "../mocks/contentItems";

const ContentList = () => {
  const activeTab = useContentStore(state => state.activeTab);
  const now = new Date();

  const filteredItems = contentItemsMock
    .filter(item => {
      const published = new Date(item.publishedAt);
      return activeTab === "reserved" ? published > now : published <= now;
    })
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return activeTab === "reserved" ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {filteredItems.length === 0 ? (
        <div className="w-full h-[56px] bg-grayscale-100/80 text-center text-b2R text-grayscale-600 rounded-[12px] shadow-drop flex items-center justify-center">
          현재 콘텐츠가 없어요.
        </div>
      ) : (
        filteredItems.slice(0, 3).map(item => <ContentItem key={item.id} {...item} />)
      )}
      {filteredItems.length === 0 ? (
        ""
      ) : (
        <button className="mt-2 w-[84px] h-[34px] text-center text-b3M text-grayscale-500 rounded-full bg-grayscale-100 shadow-drop">
          전체보기
        </button>
      )}
    </div>
  );
};

export default ContentList;
