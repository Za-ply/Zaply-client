import { Platforms } from "@/types/platform";
import {
  instagramCircle,
  threadCircle,
  facebookCircle,
  xCircleMono,
  linkedinCircleMono,
} from "@public/assets/images/sns";

const platformLogos = {
  [Platforms.INSTAGRAM]: instagramCircle,
  [Platforms.THREADS]: threadCircle,
  [Platforms.FACEBOOK]: facebookCircle,
  [Platforms.X]: xCircleMono,
  [Platforms.LINKEDIN]: linkedinCircleMono,
};

export const useProfileImage = (platform: Platforms) => {
  return platformLogos[platform];
};
