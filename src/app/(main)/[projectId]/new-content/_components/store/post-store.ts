import { create } from "zustand";
import { PostCardType } from "../mocks";

interface PostState {
  selectPostList: PostCardType | null;
  viewType: "vertical" | "gallery";
  isShowDetail: boolean;

  setSelectPostList: (post: PostCardType | null) => void;
  setViewType: (type: "vertical" | "gallery") => void;
  setIsShowDetail: (isShow: boolean) => void;
}

export const usePostStore = create<PostState>(set => ({
  selectPostList: null,
  viewType: "vertical",
  isShowDetail: false,

  setSelectPostList: post => set({ selectPostList: post }),
  setViewType: type => set({ viewType: type }),
  setIsShowDetail: isShow => set({ isShowDetail: isShow }),
}));
