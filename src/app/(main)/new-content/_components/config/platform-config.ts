import { Category, Platforms } from "@/types/platform";
import {
  instagram,
  instagramMono,
  thread,
  threadMono,
  facebook,
  facebookMono,
  x,
  xMono,
  linkedin,
  linkedinMono,
} from "@public/assets/images/sns";

export const platformConfig = {
  [Platforms.INSTAGRAM]: {
    name: "Instagram",
    icon: instagram,
    iconMono: instagramMono,
    categories: [Category.POST, Category.REELS, Category.STORY],
  },
  [Platforms.THREADS]: {
    name: "Thread",
    icon: thread,
    iconMono: threadMono,
    categories: [Category.POST],
  },
  [Platforms.FACEBOOK]: {
    name: "Facebook",
    icon: facebook,
    iconMono: facebookMono,
    categories: [Category.POST, Category.REELS, Category.STORY],
  },
  [Platforms.X]: {
    name: "X",
    icon: x,
    iconMono: xMono,
    categories: [Category.POST],
  },
  [Platforms.LINKEDIN]: {
    name: "LinkedIn",
    icon: linkedin,
    iconMono: linkedinMono,
    categories: [Category.POST],
  },
};
