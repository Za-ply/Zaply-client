import { Platforms } from "@/types/platform";
import { create } from "zustand";

interface ContentMakeState {
  content: string;
  files: File[];
  uploadPlatforms: Platforms[];
}

interface ContentMakeStore {
  postData: ContentMakeState;
  selectedContentPlatform: Platforms | null;
  setContent: (content: string) => void;
  setFiles: (files: File[]) => void;
  setUploadPlatforms: (platforms: Platforms[]) => void;
  setSelectedContentPlatform: (platform: Platforms | null) => void;
  resetSelections: () => void;
  resetPostData: () => void;
}

const initialState: ContentMakeState = {
  content: "",
  files: [],
  uploadPlatforms: [],
};

export const useContentMakeStore = create<ContentMakeStore>(set => ({
  postData: initialState,
  selectedContentPlatform: null,

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

  setSelectedContentPlatform: (platform: Platforms | null) =>
    set(() => ({
      selectedContentPlatform: platform,
    })),

  resetSelections: () =>
    set(state => ({
      postData: {
        ...state.postData,
        uploadPlatforms: [],
      },
      selectedContentPlatform: null,
    })),

  resetPostData: () =>
    set({
      postData: initialState,
      selectedContentPlatform: null,
    }),
}));
