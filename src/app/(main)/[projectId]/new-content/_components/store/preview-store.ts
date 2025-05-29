import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FileWithPreview {
  file: File;
  previewUrl: string;
}

const useFilePreviewStore = create<{
  files: FileWithPreview[];
  setFiles: (files: FileWithPreview[]) => void;
  resetFiles: () => void;
}>()(
  persist(
    set => ({
      files: [],
      setFiles: (files: FileWithPreview[]) => set({ files }),
      resetFiles: () => set({ files: [] }),
    }),
    {
      name: "file-preview-storage",
    }
  )
);

export default useFilePreviewStore;
