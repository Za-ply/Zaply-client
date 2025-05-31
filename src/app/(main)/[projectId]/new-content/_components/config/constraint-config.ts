import { Platforms } from "@/types/platform";

export const policyConfig = {
  [Platforms.INSTAGRAM]: {
    maxImageCount: 10,
    maxContentLength: 2200,
  },
  [Platforms.THREADS]: {
    maxImageCount: 20,
    maxContentLength: 500,
  },
  [Platforms.FACEBOOK]: {
    maxImageCount: 50,
    maxContentLength: 63206,
  },
  [Platforms.X]: {
    maxImageCount: 4,
    maxContentLength: 1000,
  },
  [Platforms.LINKEDIN]: {
    maxImageCount: 9,
    maxContentLength: 3000,
  },
};
