import { Dayjs } from "dayjs";

export type WritingStatus = "Private" | "Public" | "PublicOnDetail";

export type Writing = {
  title: string;
  publishedAt: string;
  description?: string;
  slug: string;
  tags?: string[];
  status: WritingStatus;
  thumbnail?: string;
  wordCount?: number;
};
