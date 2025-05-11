import { ContentItemProps } from "@/types/contentItem";

export const contentItemsMock: ContentItemProps[] = [
  {
    id: 1,
    type: "게시글",
    title: "신제품 출시 소식 전해드립니다!",
    publishedAt: "2025-04-12T16:00:00",
    platforms: ["instagram", "threads", "facebook"],
  },
  {
    id: 2,
    type: "숏폼",
    title: "지금 유행하는 패션 꿀팁 모음",
    publishedAt: "2025-04-01T10:30:00",
    platforms: ["instagram"],
  },
  {
    id: 3,
    type: "게시글",
    title: "우리 회사의 비전과 미션을 소개합니다",
    publishedAt: "2025-03-20T18:00:00",
    platforms: ["facebook"],
  },
  {
    id: 4,
    type: "숏폼",
    title: "이벤트 참여하고 선물 받아가세요!",
    publishedAt: "2025-05-05T09:00:00",
    platforms: ["instagram", "facebook"],
  },
  {
    id: 5,
    type: "게시글",
    title: "5월 가정의 달, 캠페인 안내",
    publishedAt: "2025-05-07T12:00:00",
    platforms: ["threads"],
  },
  {
    id: 6,
    type: "숏폼",
    title: "여름맞이 바캉스 룩북 공개🔥",
    publishedAt: "2025-05-10T14:00:00",
    platforms: ["instagram", "threads", "facebook"],
  },
];
