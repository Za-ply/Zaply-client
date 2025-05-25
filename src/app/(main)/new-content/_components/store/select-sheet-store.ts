import { SheetOptions } from "@/constants/sheet-options";
import { createSheetStore } from "@/stores/store-sheet";

export const selectSheetStore = {
  [SheetOptions.MAIN_PLATFORM]: createSheetStore(),
  [SheetOptions.LOAD_POST]: createSheetStore(),
  [SheetOptions.UPLOAD_LOCATION]: createSheetStore(),
  [SheetOptions.CALENDAR]: createSheetStore(),
};
