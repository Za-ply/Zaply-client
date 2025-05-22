import { authController } from "../controller";
import { tokenManager } from "../axios/tokenManager";
import {
  ApiResponse,
  LoginData,
  LoginRequest,
  SignUpData,
  SignUpRequest,
  LoginResponse,
} from "../model";
import useUserStore from "../../../stores/userStore";

const authService = {
  login: async (data: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
    try {
      const response = await authController.login(data);
      const { tokenResponse, memberResponse, accountsInfoResponse } = response.data;

      tokenManager.setTokens(tokenResponse.accessToken, tokenResponse.refreshToken);

      useUserStore.getState().setUserInfo(memberResponse);
      useUserStore.getState().setAccounts(accountsInfoResponse.accounts);

      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error(error as string);
    }
  },

  logout: async (): Promise<void> => {
    try {
      const response = await authController.logout();

      tokenManager.removeTokens();
      useUserStore.getState().clearUserInfo();

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
