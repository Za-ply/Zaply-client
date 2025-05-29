import { tokenManager } from "@/lib/api/axios/tokenManager";
import { LoginRequest } from "@/lib/api/model";
import { authService } from "@/lib/api/service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useUserLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await authService.login(data);
      return response;
    },
    onSuccess: async response => {
      // 토큰이 저장되었는지 확인
      const accessToken = tokenManager.getAccessToken();
      if (accessToken) {
        // 쿠키가 설정될 시간을 주기 위해 약간의 지연 추가
        await new Promise(resolve => setTimeout(resolve, 100));

        if (response.data.accountsInfoResponse.totalCount > 0) {
          router.replace("/main");
          router.refresh();
        } else {
          router.replace("/main?state=INIT");
          router.refresh();
        }
      }
    },
  });
};

const useUserLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const response = await authService.logout();
      return response;
    },
    onSuccess: () => {
      /** 로그아웃 성공 시 토큰 삭제 */
      tokenManager.removeTokens();
      localStorage.clear();
      router.replace("/sign-in");
    },
  });
};

export { useUserLogin, useUserLogout };
