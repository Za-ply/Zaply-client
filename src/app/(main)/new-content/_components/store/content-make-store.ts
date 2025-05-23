import { Platforms } from "@/types/platform";
import { create } from "zustand";

interface ContentMakeState {
  content: string;
  files: File[];
  uploadPlatforms: Platforms[];
}

interface ContentMakeStore {
  postData: ContentMakeState;
  setContent: (content: string) => void;
  setFiles: (files: File[]) => void;
  setUploadPlatforms: (platforms: Platforms[]) => void;
  resetPostData: () => void;
}

const initialState: ContentMakeState = {
  content: "",
  files: [],
  uploadPlatforms: [],
};

export const useContentMakeStore = create<ContentMakeStore>(set => ({
  postData: initialState,
  setContent: (content: string) =>
    set(state => ({
      postData: { ...state.postData, content },
    })),
  setFiles: (files: File[]) =>
    set(state => ({
      postData: { ...state.postData, files },
    })),
  setUploadPlatforms: (platforms: Platforms[]) =>
    set(state => ({
      postData: { ...state.postData, uploadPlatforms: platforms },
    })),
  resetPostData: () => set({ postData: initialState }),
}));
