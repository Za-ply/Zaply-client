export type PlatformType = "instagram" | "threads" | "facebook";

export type ContentItemProps = {
  id: number;
  type: "게시글" | "숏폼";
  title: string;
  publishedAt: string;
  platforms: PlatformType[];
};

export type ContentItemList = ContentItemProps[];
