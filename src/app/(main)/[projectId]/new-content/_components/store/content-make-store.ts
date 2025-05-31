import { Platforms } from "@/types/platform";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ContentMakeState {
  content: string;
  files: File[];
  uploadPlatforms: Platforms[];
  selectedPlatforms: Record<Platforms, boolean>;
}

interface ContentMakeStore {
  postData: ContentMakeState;
  selectedContentPlatform: Platforms | null;
  setContent: (content: string) => void;
  setFiles: (files: File[]) => void;
  setUploadPlatforms: (platforms: Platforms[]) => void;
  setSelectedContentPlatform: (platform: Platforms | null) => void;
  setPlatformChecked: (platform: Platforms, isChecked: boolean) => void;
  resetSelections: () => void;
  resetPostData: () => void;
}

const initialState: ContentMakeState = {
  content: "",
  files: [],
  uploadPlatforms: [],
  selectedPlatforms: {
    [Platforms.INSTAGRAM]: false,
    [Platforms.THREADS]: false,
    [Platforms.FACEBOOK]: false,
    [Platforms.X]: false,
    [Platforms.LINKEDIN]: false,
  },
};

export const useContentMakeStore = create<ContentMakeStore>()(
  persist(
    set => ({
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

      setPlatformChecked: (platform: Platforms, isChecked: boolean) =>
        set(state => ({
          postData: {
            ...state.postData,
            selectedPlatforms: {
              ...state.postData.selectedPlatforms,
              [platform]: isChecked,
            },
          },
        })),

      resetSelections: () =>
        set(state => ({
          postData: {
            ...state.postData,
            uploadPlatforms: [],
            selectedPlatforms: initialState.selectedPlatforms,
          },
          selectedContentPlatform: null,
        })),

      resetPostData: () =>
        set({
          postData: initialState,
          selectedContentPlatform: null,
        }),
    }),
    {
      name: "content-make-storage",
    }
  )
);
