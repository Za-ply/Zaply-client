import { Platforms } from "@/types/platform";
import { instagramCircle, facebookCircle, threadCircle } from "@public/assets/images/sns";
import { SocialPlatform } from "@/app/(mypage)/_components/types/platform";

type SocialInfo = {
  name: string;
  icon: any;
  limitMessage: {
    show: boolean;
    title?: string;
    description?: string;
  };
  recommendations: string[];
  synergy: SocialPlatform[];
};

export const socialInfo: Record<SocialPlatform, SocialInfo> = {
  [Platforms.INSTAGRAM]: {
    name: "Instagram",
    icon: instagramCircle,
    limitMessage: {
      show: true,
      title: "현재는 비즈니스 계정만 연결할 수 있어요",
      description: "개인 및 크리에이터 계정 연결은 추후 제공 예정이에요.",
    },
    recommendations: [
      "트래픽을 늘리고 싶은 크리에이터",
      "브랜드의 신뢰를 빠르게 쌓고 싶은 크리에이터",
      "팔로워 전환율을 올리고 싶은 크리에이터",
    ],
    synergy: [Platforms.THREADS, Platforms.FACEBOOK],
  },

  [Platforms.THREADS]: {
    name: "Thread",
    icon: threadCircle,
    limitMessage: {
      show: false,
    },
    recommendations: [
      "더 빠른 소통이 필요한 크리에이터",
      "높은 노출수를 원하는 크리에이터",
      "부담없는 브랜딩을 하고 싶은 크리에이터",
    ],
    synergy: [Platforms.INSTAGRAM, Platforms.FACEBOOK],
  },

  [Platforms.FACEBOOK]: {
    name: "Facebook",
    icon: facebookCircle,
    limitMessage: {
      show: true,
      title: "현재는 페이지 계정만 연결할 수 있어요",
      description: "개인 계정 연결은 추후 제공 예정이에요.",
    },
    recommendations: [
      "페이지로 커뮤니티를 구축하고 싶은 크리에이터",
      "다양한 콘텐츠 포맷을 시도하고 싶은 크리에이터",
      "광고 타겟팅을 확장하고 싶은 크리에이터",
    ],
    synergy: [Platforms.INSTAGRAM, Platforms.THREADS],
  },
};
