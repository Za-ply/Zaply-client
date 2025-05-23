import { tokenManager } from "@/lib/api/axios/tokenManager";
import { authService } from "@/lib/api/service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

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
      router.replace("/sign-in");
    },
  });
};

export { useUserLogout };
