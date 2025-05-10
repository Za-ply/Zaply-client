# Zaply-client
큐시즘 밋업데이 1조 Zaply 프론트엔드 레포지토리

# ⭐️ Frontend

#### 랜딩페이지 URL https://zaply-landing.vercel.app/
#### 배포 URL 
* * *

## 💻 Technology
* ![Static Badge](https://img.shields.io/badge/nextjs-%252320232a.svg?logo=nextdotjs&color=%23000000) ![Static Badge](https://img.shields.io/badge/zustand-%252320232a.svg?color=%231C1C1C)
* ![Static Badge](https://img.shields.io/badge/typescript-%253178C6.svg?logo=typescript&logoColor=%23FFFFFF&color=%233178C6) ![Static Badge](https://img.shields.io/badge/pnpm-%253178C6.svg?logo=pnpm&logoColor=%23#F69220&color=%23#F69220)
* ![Static Badge](https://img.shields.io/badge/tailwindCSS-%253178C6.svg?logo=tailwindCSS&logoColor=%23FFFFFF&color=%2306B6D4) ![Static Badge](https://img.shields.io/badge/shadcn%2Fui-%253178C6.svg?logo=shadcn%2Fui&logoColor=%23FFFFFF&color=%23000000)
* ![Static Badge](https://img.shields.io/badge/TanStack%20Query-%253178C6.svg?logo=React%20Query&logoColor=%23FFFFFF&color=%23FF4154) ![Static Badge](https://img.shields.io/badge/Vercel-%253178C6.svg?logo=Vercel&logoColor=%23FFFFFF&color=%23000000) ![Static Badge](https://img.shields.io/badge/PWA-%253178C6.svg?logo=PWA&logoColor=%23FFFFFF&color=%235A0FC8)


## 🧸 기술 스택 선정 이유

| 기술 스택 | 설명 |
|-----------|------|
| Next.js 14 | Next.js 14는 React 기반 프레임워크로, 서버 컴포넌트와 서버 액션을 통해 클라이언트 측 JavaScript 양을 줄여 성능을 최적화합니다. App Router를 기본으로 채택하여 파일 시스템 기반 라우팅을 제공하며, 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 기본 지원합니다. Next.js 14는 React와 마찬가지로 컴포넌트 기반 아키텍처를 채택하고 있어 UI 요소들을 재사용 가능한 컴포넌트로 분리하여 개발할 수 있습니다. 또한, 증분적 정적 재생성(ISR), 이미지 최적화, 국제화(i18n) 기능, 그리고 Vercel 플랫폼과의 통합을 통한 간편한 배포 환경을 제공하기에 프로젝트에 Next.js 14를 도입하게 되었습니다. |
| typescript | 정적 타입 언어로서 코드의 안정성을 높이고 협업을 용이하게 하며, 생산성 접근 파일 단계에서 오류를 사전에 발견하여 런타임 오류를 방지할 수 있습니다. 또한, 코드 힌트와 자동 완성을 제공해 개발 생산성을 향상시킬 수 있어 TypeScript를 선정했습니다. |
| zustand |  간결하고 직관적인 상태 관리 방식과 최소한의 보일러플레이트로 유연성을 제공하며, 상태 변경 시에만 컴포넌트를 렌더링하여 불필요한 렌더링을 최소화하고 성능 향상에 도움이 됩니다. |
| pnpm | node_modules를 효율적으로 관리하여 디스크 공간을 절약하고 설치 속도를 향상시키는 패키지 매니저입니다. |
| tailwindCSS | 개발의 편의성 HTML과 CSS 파일을 별도로 개발 및 관리할 필요가 없기 때문에 개발하기에 편리하고, 팀핑하는 각 태그의 클래스명을 고민할 시간을 절약할 수 있어 빠른 개발이 가능합니다. |
| shadcn/ui | TailwindCSS와의 긴밀한 통합으로 빠르고 일관된 스타일링이 가능하며, 높은 확장성과 유연한 커스터마이징 기능을 통해 프로젝트 요구사항에 맞는 UI를 효율적으로 구현할 수 있습니다. |
| TanStack-Query | 효율적인 데이터 페칭과 관리를 제공하며, 데이터 캐싱 기능을 통해 불필요한 요청을 줄여 성능 최적화와 네트워크 비용 절감이 가능합니다. |
| Vercel | 깃 저장소와 통합되어 코드 변경 사항을 자동으로 감지하고, 푸시할 때마다 자동 배포를 지원하여 효율적이고 간편하게 웹사이트를 배포할 수 있습니다. |
| PWA | 웹 기술 기반으로 다양한 플랫폼에서 동작하고, 앱 스토어 없이 홈 화면에 추가할 수 있어 접근성과 편의성이 뛰어나며, 개발 비용 절감과 빠른 배포가 가능합니다. |

## 🗂️ Naming Rules
* 폴더명 - `camelCase`
* 파일명 - `PascalCase`
* 타입, 유틸함수 등 - `camelCase`
* 상수 - `UpperCase`

## 📄 Commit Convension
커밋 메시지는 `태그: 커밋 메시지` 형식으로 작성 (ex. git commit -m "feat: 카카오 로그인 기능 구현")

📌Type

| 태그명 | commit 규칙 |
|----------|--------------|
| 🔗 feat | 새로운 기능 개발 |
| 🛠 fix | 코드 및 버그 수정 |
| 🎨 style | CSS 스타일링 및 퍼블리싱 작업 |
| 📄 docs | 문서 작업(REANME.md 등) |
| 📘 test | 배포 테스트, QA 테스팅 관련 |
| 🔗 chore | 패키지 매니저 수정, 그 외 기타 수정 |
| 🔨 build | 빌드 시스템 또는 외부 종속성에 영향을 미치는 변경 사항 |
| 🧰 refactor | 코드 리팩토링 |
| 🔧 rename | 폴더 혹은 파일명 변경 |
| ✂️ remove | 파일 삭제 |


## 🌊 Git Flow
| 브랜치 명 | 역할 |
|----------|--------------|
| main | 최종 배포될 서비스의 브랜치 |
| develop | 개발 브랜치, 해당 브랜치에서 분기를 파 작업 후 merge |
| feature | 기능 개발 브랜치 |
| hotfix | main 브랜치 배포 후 긴급 수정 사항 발생 시 사용하는 브랜치 |
