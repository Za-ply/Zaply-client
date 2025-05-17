import { useState, ChangeEvent } from "react";

interface UseFilePreviewReturn {
  previewUrls: string[];
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
}

export const useFilePreview = (): UseFilePreviewReturn => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setPreviewUrls(prev => [...prev, result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index: number) => {
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  return {
    previewUrls,
    handleFileChange,
    removeFile,
  };
};
