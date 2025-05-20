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
  id: number;
  email: string;
  phoneNumber: string;
}

export type SnsType = "FACEBOOK" | "THREADS" | "INSTAGRAM";

export interface Account {
  snsType: SnsType;
  accountName: string;
}

export interface AccountsResponse {
  totalCount: number;
  accounts: Account[];
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
  accountsInfoResponse: AccountsResponse;
}
