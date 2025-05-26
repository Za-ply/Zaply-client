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
