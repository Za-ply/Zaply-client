export type SnsType = "FACEBOOK" | "THREADS" | "INSTAGRAM";

export interface Account {
  snsType: SnsType;
  accountName: string;
  profileImageUrl?: string;
}

export interface AccountResponse {
  totalCount: number;
  accounts: Account[];
}

export interface MemberInfo {
  memberId: number;
  name: string | null;
  email: string;
  phoneNumber: string;
}
