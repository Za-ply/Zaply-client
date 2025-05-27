import { useEffect, useState } from "react";
import { usePlatformStore } from "../store";
import { searchOptions } from "@/constants/search-options";
import { SheetOptions } from "@/constants/sheet-options";
import { selectSheetStore } from "../store/select-sheet-store";

const useLoadContent = () => {
  const { selectedPlatform } = usePlatformStore();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const store = selectSheetStore[SheetOptions.LOAD_POST];
  const { isOpen, setIsOpen } = store();

  useEffect(() => {
    if (isOpen) {
      setSelectedOption(
        searchOptions.find(option => option.value === selectedPlatform)?.value ||
          searchOptions[0].value
      );
    }
  }, [isOpen]);

  return { selectedPlatform, selectedOption, setSelectedOption, isOpen, setIsOpen };
};

export default useLoadContent;
