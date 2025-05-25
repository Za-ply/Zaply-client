import { ChangeEvent } from "react";
import useFilePreviewStore from "../store/preview-store";

interface FileWithPreview {
  file: File;
  previewUrl: string;
}

interface UseFilePreviewReturn {
  files: FileWithPreview[];
  setFiles: (files: FileWithPreview[]) => void;
  previewUrls: string[];
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
  getFormData: () => FormData;
}

export const useFilePreview = (): UseFilePreviewReturn => {
  const { files, setFiles } = useFilePreviewStore();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    if (!newFiles) return;

    Array.from(newFiles).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          const currentFiles = useFilePreviewStore.getState().files;
          setFiles([...currentFiles, { file, previewUrl: result }]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index: number) => {
    const currentFiles = useFilePreviewStore.getState().files;
    setFiles(currentFiles.filter((_, i) => i !== index));
  };

  const getFormData = () => {
    const formData = new FormData();
    files.forEach(({ file }, index) => {
      formData.append(`file${index}`, file);
    });
    return formData;
  };

  return {
    files,
    setFiles,
    previewUrls: files.map(f => f.previewUrl),
    handleFileChange,
    removeFile,
    getFormData,
  };
};
