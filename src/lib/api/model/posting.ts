export interface Posting {
  postingId: number;
  postingTitle: string;
  postingType: string;
  postingContent: string;
  scheduledAt: string;
  postingImages: string[];
  postingLink: string;
}
export interface SNSPostingContent {
  postingId: string;
  postingTitle: string;
  postingContent: string;
  publishedAt: string;
  postingImages: string[];
}

export interface SNSPostingResponse {
  content: SNSPostingContent[];
  nextCursor: string;
  hasNext: boolean;
}

export interface SNSPostingListRequest {
  cursor?: string | undefined;
  size: number;
  snsType: string;
}

export interface SNSPostingDetailRequest {
  snsType: string;
  mediaId: string;
}

export interface TransferSNSPostingRequest {
  snsTypes: string[];
  userPrompt: string;
}

export interface ToneTransferResponseItem {
  snsType: string;
  content: string;
}

export interface TransferSNSPostingResponse {
  toneTransferResponseItems: ToneTransferResponseItem[];
}
