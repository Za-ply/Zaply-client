import { NextRequest, NextResponse } from "next/server";
import { TokenType } from "./lib/api/model/token";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isFileRequest = pathname.match(/\.\w+$/);
  const accessToken = request.cookies.get(TokenType.ACCESS_TOKEN);

  // 정적 파일 요청은 통과
  if (isFileRequest) {
    return NextResponse.next();
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }

  return NextResponse.next();
}

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: [
    "/main/:path*",
    "/new-content/:path*",
    "/mypage/:path*",
    "/socials/:path*",
    "/connect/:path*",
  ],
};
