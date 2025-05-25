import profile1 from "@public/assets/images/profile1.webp";
import { StaticImageData } from "next/image";

// 임시 더미 데이터 및 타입 정보

export interface PostCardType {
  id: number;
  content: string;
  createdAt: string;
  imageData: {
    id: number;
    imageUrl: StaticImageData; // 추후 데이터 구조에 맞게 타입 변경
  }[];
}

export const mockPostList: PostCardType[] = [
  {
    id: 1,
    content:
      "[슈퍼알람] 일어나서 20걸음 걸어야 멈추는 기상 알람 ⏰ 아침에 알람 소리에 잘 일어나서 걸어야 멈추는 기상 알람",
    createdAt: "2025-05-21 12:00:00",
    imageData: [
      {
        id: 1,
        imageUrl: profile1,
      },
      {
        id: 2,
        imageUrl: profile1,
      },
      {
        id: 3,
        imageUrl: profile1,
      },
      {
        id: 4,
        imageUrl: profile1,
      },
      {
        id: 5,
        imageUrl: profile1,
      },
      {
        id: 6,
        imageUrl: profile1,
      },
    ],
  },
  {
    id: 2,
    content:
      "[콕!] 모두가 만족할 중간 지점을 찾는 방법 🤗 둘만의 약속이라면 중간 지점을 쉽게 찾는 방법",
    createdAt: "2025-05-21 12:00:00",
    imageData: [
      {
        id: 1,
        imageUrl: profile1,
      },
      {
        id: 2,
        imageUrl: profile1,
      },
    ],
  },
  {
    id: 3,
    content:
      "[술렁술렁] 술쟁이를 위한 술자리 기록 필수템! 🍺 술을 즐기시나요? 저 역시 술을 꽤 좋아합니다. 술자리 기록 필수템! 술을 즐기시나요? 저 역시 술을 꽤 좋아합니다. 술자리 기록 필수템! 술을 즐기시나요? 저 역시 술을 꽤 좋아합니다. 술자리 기록 필수템!",
    createdAt: "2025-05-21 12:00:00",
    imageData: [
      {
        id: 1,
        imageUrl: profile1,
      },
      {
        id: 2,
        imageUrl: profile1,
      },
    ],
  },
  {
    id: 4,
    content:
      "[토스] 쿠폰으로 유도하는 상품 탐색 경험 🛍 ‘토스’의 오랜 팬으로서, UX를 구경하고 싶었습니다. 쿠폰으로 유도하는 상품 탐색 경험 🛍 ‘토스’의 오랜 팬으로서, UX를 구경하고 싶었습니다. 쿠폰으로 유도하는 상품 탐색 경험 🛍 ‘토스’의 오랜 팬으로서, UX를 구경하고 싶었습니다.",
    createdAt: "2025-05-21 12:00:00",
    imageData: [
      {
        id: 1,
        imageUrl: profile1,
      },
      {
        id: 2,
        imageUrl: profile1,
      },
    ],
  },
  {
    id: 5,
    content:
      "[토스] 쿠폰으로 유도하는 상품 탐색 경험 🛍 ‘토스’의 오랜 팬으로서, UX를 구경하고 싶었습니다. 쿠폰으로 유도하는 상품 탐색 경험 🛍 ‘토스’의 오랜 팬으로서, UX를 구경하고 싶었습니다. 쿠폰으로 유도하는 상품 탐색 경험 🛍 ‘토스’의 오랜 팬으로서, UX를 구경하고 싶었습니다.",
    createdAt: "2025-05-21 12:00:00",
    imageData: [
      {
        id: 1,
        imageUrl: profile1,
      },
      {
        id: 2,
        imageUrl: profile1,
      },
    ],
  },
  {
    id: 6,
    content:
      "[토스] 쿠폰으로 유도하는 상품 탐색 경험 🛍 ‘토스’의 오랜 팬으로서, UX를 구경하고 싶었습니다. 쿠폰으로 유도하는 상품 탐색 경험 🛍 ‘토스’의 오랜 팬으로서, UX를 구경하고 싶었습니다. 쿠폰으로 유도하는 상품 탐색 경험 🛍 ‘토스’의 오랜 팬으로서, UX를 구경하고 싶었습니다.",
    createdAt: "2025-05-21 12:00:00",
    imageData: [
      {
        id: 1,
        imageUrl: profile1,
      },
      {
        id: 2,
        imageUrl: profile1,
      },
    ],
  },
  {
    id: 7,
    content:
      "[슈퍼알람] 일어나서 20걸음 걸어야 멈추는 기상 알람 ⏰아침에 알람 소리에 잘 일어나시나요? 평소에 잘 일어나는 사람이라도 피곤하거나 잠이 덜 깬 상태에서는 무심코 알람을 끄거나 심지어 앱을 삭제해버리는 경우가 종종 있습니다. 😴 이러한 문제를 해결해주는 강력한 알람 서비스를 최근에 발견했습니다. 바로 ‘슈퍼알람’ 입니다. 이미 많은 사람들이 사용하고 있을지도 모르지만, 이 앱의 독특한 기상 미션과 기능들이 매우 흥미로워 소개해 드리고자 합니다.먼저, 알람 서비스답게 일어날 시간을 설정합니다. 🔔 그 다음으로 이 앱의 핵심 기능인 ‘기상 미션’을 선택할 수 있습니다. 무료 계정으로는 ‘수학문제’와 ‘얼굴인식’ 두 가지 미션만 제공되지만, 유료 결제를 하면 ‘걷기’, ‘기억력 게임’, ‘사물 스캔’, ‘QR/바코드 스캔’, ‘따라쓰기’ 등 다양한 미션을 설정할 수 있습니다.예를 들어, ‘걷기’ 미션은 설정한 걸음 수를 실제로 걸어야 알람이 꺼지며, ‘기억력 게임’은 화면에 나타난 타일의 위치를 정확히 기억해 눌러야만 알람이 멈춥니다. 또한 ‘사물 스캔’은 AI 기술을 활용해 지정된 사물을 스캔해야 알림이 꺼지는 방식입니다. 특히 이 기능에는 고양이나 강아지를 설정할 수 있어, 반려동물을 키우는 분들은 아침에 고양이나 강아지를 찾아야 알람을 끌 수 있는 재미있는 경험을 할 수 있습니다.또한, 혹시라도 잠결에 앱을 삭제하는 상황을 방지하기 위한 ‘앱 삭제 방지’ 기능도 지원하여, 기상을 철저히 도와줍니다. 아침 기상이 어려운 분들에게 이러한 독특한 미션들은 큰 도움이 될 수 있을 것 같습니다. 😊.또한, 혹시라도 잠결에 앱을 삭제하는 상황을 방지하기 위한 ‘앱 삭제 방지’ 기능도 지원하여, 기상을 철저히 도와줍니다. 아침 기상이 어려운 분들에게 이러한 독특한 미션들은 큰 도움이 될 수 있을 것 같습니다. 😊",
    createdAt: "2025-05-21 12:00:00",
    imageData: [
      {
        id: 1,
        imageUrl: profile1,
      },
      {
        id: 2,
        imageUrl: profile1,
      },
      {
        id: 3,
        imageUrl: profile1,
      },
      {
        id: 4,
        imageUrl: profile1,
      },
      {
        id: 5,
        imageUrl: profile1,
      },
      {
        id: 6,
        imageUrl: profile1,
      },
      {
        id: 7,
        imageUrl: profile1,
      },
      {
        id: 8,
        imageUrl: profile1,
      },
      {
        id: 9,
        imageUrl: profile1,
      },
    ],
  },
];
