export const PLATFORMS = {
  INSTAGRAM: "INSTAGRAM",
  FACEBOOK: "FACEBOOK",
  THREADS: "THREADS",
} as const;

export type Platform = keyof typeof PLATFORMS;

export const PLATFORM_LABELS: Record<Platform, string> = {
  [PLATFORMS.INSTAGRAM]: "Instagram",
  [PLATFORMS.FACEBOOK]: "Facebook",
  [PLATFORMS.THREADS]: "Threads",
};

export const PLATFORM_ICONS: Record<Platform, string> = {
  [PLATFORMS.INSTAGRAM]: "instagram",
  [PLATFORMS.FACEBOOK]: "facebook",
  [PLATFORMS.THREADS]: "threads",
};
