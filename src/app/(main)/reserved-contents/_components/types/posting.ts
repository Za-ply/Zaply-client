export interface Posting {
  postingId: number;
  postingTitle: string | null;
  postingContent: string;
  scheduledAt: string | null;
  postingType: string;
  postingState: string;
  postingLink: string | null;
  postingImages: string[];
}

export interface PostingInfo {
  data: Posting[];
}
