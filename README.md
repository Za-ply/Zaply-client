# 🚀 Zaply-client

큐시즘 밋업데이 1조 Zaply 프론트엔드 레포지토리

### 📱 Service URL
- **Landing Page**: [https://zaply-landing.vercel.app/](https://zaply-landing.vercel.app/)
- **Main Service**: [https://zaply-client.vercel.app/](https://zaply-client.vercel.app/)

## Tech Stack

<div align="center">
  <img src="https://img.shields.io/badge/nextjs-%252320232a.svg?logo=nextdotjs&color=%23000000" alt="Next.js" />
  <img src="https://img.shields.io/badge/zustand-%252320232a.svg?color=%231C1C1C" alt="Zustand" />
  <img src="https://img.shields.io/badge/typescript-%253178C6.svg?logo=typescript&logoColor=%23FFFFFF&color=%233178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/pnpm-%253178C6.svg?logo=pnpm&logoColor=%23FFFFFF&color=%23F69220" alt="PNPM" />
  <img src="https://img.shields.io/badge/tailwindCSS-%253178C6.svg?logo=tailwindCSS&logoColor=%23FFFFFF&color=%2306B6D4" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-%253178C6.svg?logo=shadcn%2Fui&logoColor=%23FFFFFF&color=%23000000" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/TanStack%20Query-%253178C6.svg?logo=React%20Query&logoColor=%23FFFFFF&color=%23FF4154" alt="TanStack Query" />
  <img src="https://img.shields.io/badge/Vercel-%253178C6.svg?logo=Vercel&logoColor=%23FFFFFF&color=%23000000" alt="Vercel" />
  <img src="https://img.shields.io/badge/PWA-%253178C6.svg?logo=PWA&logoColor=%23FFFFFF&color=%235A0FC8" alt="PWA" />
</div>

## Technologies Used

| Stack | Reason |
|-----------|------|
| **Next.js 14** | React 기반 프레임워크로, 서버 컴포넌트와 서버 액션을 통해 클라이언트 측 JavaScript 양을 줄여 성능 최적화. App Router를 통한 파일 시스템 기반 라우팅, SSR/SSG 기본 지원, 컴포넌트 재사용성, 증분적 정적 재생성(ISR), 이미지 최적화, Vercel과의 간편한 통합 배포 환경을 제공하여 선정. |
| **TypeScript** | 정적 타입 시스템을 통한 코드 안정성 향상 및 협업 용이성. 개발 단계에서 오류 사전 발견으로 런타임 에러 방지, 코드 힌트와 자동 완성 기능으로 생산성 향상. |
| **Zustand** | 간결하고 직관적인 상태 관리 방식과 최소한의 보일러플레이트로 높은 유연성 제공. 상태 변경 시에만 컴포넌트를 렌더링하여 불필요한 렌더링 최소화와 성능 최적화. |
| **PNPM** | 효율적인 node_modules 관리로 디스크 공간 절약 및 설치 속도 향상을 제공하는 패키지 매니저. |
| **TailwindCSS** | HTML과 CSS 파일을 별도로 관리할 필요 없이 개발 가능한 편의성. 클래스명 고민 시간 절약으로 빠른 개발과 일관된 디자인 시스템 구축 가능. |
| **Shadcn/UI** | TailwindCSS와의 원활한 통합으로 일관된 스타일링. 높은 확장성과 유연한 커스터마이징 기능을 통해 프로젝트 요구사항에 맞는 UI 효율적 구현. |
| **TanStack Query** | 효율적인 데이터 페칭 및 관리 시스템. 데이터 캐싱 기능으로 불필요한 요청 감소, 성능 최적화 및 네트워크 비용 절감 가능. |
| **Vercel** | 깃 저장소와 통합된 자동 감지 및 자동 배포 시스템. 코드 변경 사항 푸시 시 자동 배포로 효율적이고 간편한 웹사이트 배포 환경 제공. |
| **PWA** | 웹 기술 기반의 크로스 플랫폼 지원. 앱 스토어 없이 홈 화면에 추가 가능한 높은 접근성과 편의성. 개발 비용 절감 및 빠른 배포 가능. |

## Naming Rules

- **폴더명**: `camelCase`
- **파일명**: `PascalCase`
- **타입, 유틸함수 등**: `camelCase`
- **상수**: `UPPER_CASE`

## Commit Convension

커밋 메시지는 `태그: 커밋 메시지` 형식으로 작성합니다.
> 예시: `git commit -m "feat: 카카오 로그인 기능 구현"`

| 태그명 | 설명 |
|--------|------|
| **feat** | 새로운 기능 개발 |
| **fix** | 코드 및 버그 수정 |
| **style** | CSS 스타일링 및 퍼블리싱 작업 |
| **docs** | 문서 작업(README.md 등) |
| **test** | 배포 테스트, QA 테스팅 관련 |
| **chore** | 패키지 매니저 수정, 그 외 기타 수정 |
| **build** | 빌드 시스템 또는 외부 종속성에 영향을 미치는 변경 사항 |
| **refactor** | 코드 리팩토링 |
| **rename** | 폴더 혹은 파일명 변경 |
| **remove** | 파일 삭제 |

---

<div align="center">
  <h3>💫 Zaply | Create Once, Spread With Zaply</h3>
</div>
