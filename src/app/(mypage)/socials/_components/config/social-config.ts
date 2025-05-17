import { Category, Platforms } from "@/types/platform";
import {
  instagramCircle,
  instagramCircleMono,
  threadCircle,
  threadCircleMono,
  facebookCircle,
  facebookCircleMono,
} from "@public/assets/images/sns";

export const platformConfig = {
  [Platforms.INSTAGRAM]: {
    name: "Instagram",
    icon: instagramCircle,
    iconMono: instagramCircleMono,
  },
  [Platforms.THREADS]: {
    name: "Thread",
    icon: threadCircle,
    iconMono: threadCircleMono,
  },
  [Platforms.FACEBOOK]: {
    name: "Facebook",
    icon: facebookCircle,
    iconMono: facebookCircleMono,
  },
};
