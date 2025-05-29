import { Platforms } from "@/types/platform";

export type SnsType = "FACEBOOK" | "THREADS" | "INSTAGRAM";

export interface Account {
  snsType: Platforms;
  accountName: string;
  profileImageUrl?: string;
  linkedAt: string;
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
