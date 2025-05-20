export enum SnsType {
  THREADS = "THREADS",
  INSTAGRAM = "INSTAGRAM",
  FACEBOOK = "FACEBOOK",
}

export interface AccountResponse {
  snsType: SnsType;
  accountName: string;
}

export interface UnlinkResponse {
  result: string;
  message: string;
}
