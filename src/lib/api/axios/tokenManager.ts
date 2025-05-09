import { getCookie, setCookie, deleteCookie } from "cookies-next";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

export const tokenManager = {
  setTokens: (accessToken: string, refreshToken: string) => {
    setCookie(ACCESS_TOKEN_KEY, accessToken, {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    setCookie(REFRESH_TOKEN_KEY, refreshToken, {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  },

  getAccessToken: (): string | undefined => {
    return getCookie(ACCESS_TOKEN_KEY)?.toString();
  },

  getRefreshToken: (): string | undefined => {
    return getCookie(REFRESH_TOKEN_KEY)?.toString();
  },

  removeTokens: () => {
    deleteCookie(ACCESS_TOKEN_KEY);
    deleteCookie(REFRESH_TOKEN_KEY);
  },
};
