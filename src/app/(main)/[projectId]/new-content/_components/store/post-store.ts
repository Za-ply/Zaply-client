import { create } from "zustand";
import { SNSPostingContent } from "@/lib/api/model/posting";

interface PostState {
  selectPostList: SNSPostingContent | null;
  viewType: "vertical" | "gallery";
  isShowDetail: boolean;

  setSelectPostList: (post: SNSPostingContent | null) => void;
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
