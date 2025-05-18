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
