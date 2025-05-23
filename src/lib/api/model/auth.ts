import { AccountResponse } from "./member";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  email: string;
  phoneNumber: string;
  residentNumber: string;
  password: string;
}

export interface LoginData {
  memberId: number;
  accessToken: string;
  refreshToken: string;
}

export interface SignUpData {
  email: string;
  phoneNumber: string;
  name: string;
  residentNumber: string;
  password: string;
  termsOfServiceAgreed: boolean;
  privacyPolicyAgreed: boolean;
  marketingAgreed: boolean;
}

export interface UserInfo {
  memberId: number;
  name: string | null;
  email: string;
  phoneNumber: string;
}

export interface LoginResponse {
  tokenResponse: {
    accessToken: string;
    refreshToken: string;
  };
  memberResponse: UserInfo;
  accountsInfoResponse: AccountResponse;
}
