import { Dayjs } from "dayjs";

export type WritingStatus = "Private" | "Public" | "PublicOnDetail";

export type Writing = {
  id: string;
  slug: string;
  tags?: string[];
  author?: {
    id: string;
    name: string;
    profile_photo?: string;
  };
  title: string;
  summary?: string;
  status: WritingStatus;
  fullWidth?: boolean;
  thumbnail?: string;
  createdAt: string | Dayjs;
  updatedAt?: string | Dayjs;
};
