export type Platform = "instagram" | "threads" | "facebook";

export interface ContentItem {
  id: number;
  type: "게시글" | "숏폼";
  title: string;
  publishedAt: string;
  platforms: Platform[];
}

export type ContentItemList = ContentItem[];
