export const CHIP_TYPES = ["default", "like", "follow"] as const;
export type ChipType = (typeof CHIP_TYPES)[number];
