import { create } from "zustand";

interface FileWithPreview {
  file: File;
  previewUrl: string;
}

const useFilePreviewStore = create<{
  files: FileWithPreview[];
  setFiles: (files: FileWithPreview[]) => void;
  resetFiles: () => void;
}>(set => ({
  files: [],
  setFiles: (files: FileWithPreview[]) => set({ files }),
  resetFiles: () => set({ files: [] }),
}));

export default useFilePreviewStore;
