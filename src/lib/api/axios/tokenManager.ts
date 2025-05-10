import { cookies } from "next/headers";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

export const tokenManager = {
  setTokens: (accessToken: string, refreshToken: string) => {
    const cookieStore = cookies();
    cookieStore.set(ACCESS_TOKEN_KEY, accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    cookieStore.set(REFRESH_TOKEN_KEY, refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
  },

  getAccessToken: () => {
    const cookieStore = cookies();
    return cookieStore.get(ACCESS_TOKEN_KEY)?.value;
  },

  getRefreshToken: () => {
    const cookieStore = cookies();
    return cookieStore.get(REFRESH_TOKEN_KEY)?.value;
  },

  removeTokens: () => {
    const cookieStore = cookies();
    cookieStore.delete(ACCESS_TOKEN_KEY);
    cookieStore.delete(REFRESH_TOKEN_KEY);
  },
};
