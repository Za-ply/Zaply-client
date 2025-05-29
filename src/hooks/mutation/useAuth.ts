import { tokenManager } from "@/lib/api/axios/tokenManager";
import { LoginRequest } from "@/lib/api/model";
import { authService } from "@/lib/api/service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useUserLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await authService.login(data);
      return response;
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
