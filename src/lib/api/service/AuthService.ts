import { authController } from "../controller";
import { tokenManager } from "../axios/tokenManager";
import { ApiResponse, LoginData, LoginRequest, SignUpData, SignUpRequest } from "../model";

const authService = {
  login: async (data: LoginRequest): Promise<ApiResponse<LoginData>> => {
    try {
      const response = await authController.login(data);

      tokenManager.setTokens(response.data.accessToken, response.data.refreshToken);
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error(error as string);
    }
  },

  logout: async (): Promise<void> => {
    try {
      const response = await authController.logout();

      // service 객체에서 토큰 삭제 처리가 아닌 logout 훅에서 onSuccess, onError 처리하도록 변경
      // tokenManager.removeTokens();
      return response;
    } catch (error) {
      console.error("Logout failed:", error);
      throw new Error(error as string);
    }
  },

  signUp: async (data: SignUpRequest): Promise<ApiResponse<SignUpData>> => {
    try {
      const response = await authController.signUp(data);
      return response;
    } catch (error) {
      console.error("Sign up failed:", error);
      throw new Error(error as string);
    }
  },

  checkEmailDuplicate: async (email: string): Promise<boolean> => {
    try {
      const response = await authController.checkEmailDuplicate(email);
      return response.data;
    } catch (error) {
      console.error("Email duplicate check failed:", error);
      throw new Error(error as string);
    }
  },
};

export default authService;
