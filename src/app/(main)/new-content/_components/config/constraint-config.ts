import { Platforms } from "@/types/platform";

export const policyConfig = {
  [Platforms.INSTAGRAM]: {
    maxImageCount: 20,
    maxContentLength: 2200,
  },
  [Platforms.THREADS]: {
    maxImageCount: 10,
    maxContentLength: 500,
  },
  [Platforms.FACEBOOK]: {
    maxImageCount: 9999,
    maxContentLength: 63206,
  },
  /** X, LinkedIn 는 추후 정책 수정 예정 (임시 정책) */
  [Platforms.X]: {
    maxImageCount: 10,
    maxContentLength: 280,
  },
  [Platforms.LINKEDIN]: {
    maxImageCount: 10,
    maxContentLength: 280,
  },
};
