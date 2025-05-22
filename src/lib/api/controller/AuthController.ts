import { apiClient } from "../axios/instance";
import { tokenManager } from "../axios/tokenManager";
import {
  ApiResponse,
  LoginData,
  LoginRequest,
  SignUpData,
  SignUpRequest,
  LoginResponse,
} from "../model";

const authController = {
  login: async (data: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
    const response = await apiClient.post<ApiResponse<LoginResponse>>("/auth/sign-in", data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    const response = await apiClient.post("/auth/sign-out");

    tokenManager.removeTokens();

    return response.data;
  },

  signUp: async (data: SignUpRequest): Promise<ApiResponse<SignUpData>> => {
    const response = await apiClient.post<ApiResponse<SignUpData>>("/auth/sign-up", data);
    return response.data;
  },

  checkEmailDuplicate: async (email: string): Promise<ApiResponse<boolean>> => {
    const response = await apiClient.get<ApiResponse<boolean>>("/auth/email/duplicate", {
      params: { email },
    });
    return response.data;
  },

  refreshToken: async (): Promise<ApiResponse<LoginData>> => {
    const response = await apiClient.post<ApiResponse<LoginData>>("/auth/recreate");
    return response.data;
  },
};

export default authController;
