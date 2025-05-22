import axios from "axios";
import { tokenManager } from "./tokenManager";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  config => {
    const token = tokenManager.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 파일 업로드와 같은 multipart/form-data 타입 요청 시 헤더 설정
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response?.data.error.code === "TOKEN_INVALID" && !originalRequest._retry) {
      // 토큰 갱신 중복 요청 방지
      originalRequest._retry = true;

      try {
        const refreshToken = tokenManager.getRefreshToken();
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        // 토큰 갱신 요청
        const response = await axios.get(`${baseURL}/auth/recreate`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        const { accessToken, refreshToken: newRefreshToken } = response.data.data;

        // 새 토큰 저장
        tokenManager.setTokens(accessToken, newRefreshToken);

        // 원래 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (error) {
        // 토큰 갱신 실패 처리
        tokenManager.removeTokens();
        // 로그인 페이지로 리다이렉트
        if (typeof window !== "undefined") {
          window.location.href = "/sign-in";
        }
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

// 개발 환경에서만 로깅
if (process.env.NODE_ENV === "development") {
  apiClient.interceptors.request.use(config => {
    console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  });

  apiClient.interceptors.response.use(
    response => {
      console.log(`[API Response] ${response.status} ${response.config.url}`);
      return response;
    },
    error => {
      console.error(`[API Error] ${error.response?.status} ${error.config?.url}`, error);
      return Promise.reject(error);
    }
  );
}
