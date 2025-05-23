import { Fragment } from "react";
import { mockPostList } from "../../../mocks";
import PostCard from "./PostCard";
import { usePostStore } from "../../../store";

const ShowContentList = () => {
  const { selectPostList, viewType, setSelectPostList } = usePostStore();

  return (
    <Fragment>
      <div
        className={`h-[528px] pb-[68px] overflow-y-auto scrollbar-thin scrollbar-thumb-grayscale-400 scrollbar-track-transparent ${viewType === "vertical" ? "pr-[11px]" : "px-5"}`}>
        {viewType === "vertical" ? (
          mockPostList.map(post => (
            <PostCard
              key={post.id}
              post={post}
              isSelected={selectPostList?.id === post.id}
              onSelect={setSelectPostList}
              viewType={viewType}
            />
          ))
        ) : (
          <div className="grid items-center justify-center w-full grid-cols-3 gap-[6px]">
            {mockPostList.map(post => (
              <PostCard
                key={post.id}
                post={post}
                isSelected={selectPostList?.id === post.id}
                onSelect={setSelectPostList}
                viewType={viewType}
              />
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ShowContentList;
