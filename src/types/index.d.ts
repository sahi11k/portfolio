export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
  rank?: number;
  alt?: string;
  stack?: string[];
};

export type Journey = {
  id: number;
  type: "work" | "education";
  time: string;
  title: string;
  description?: string;
  highlights?: string[];
  images?: string[];
};

export type Blog = {
  id: number;
  publishedAt: Date;
  link: string;
  tagList?: string[];
  description?: string;
  title: string;
  image?: string;
  readingTimeMinutes: number;
};

export interface DevToUser {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string | null;
  user_id: number;
  website_url: string | null;
  profile_image: string;
  profile_image_90: string;
}

export interface DevToArticle {
  type_of: "article";
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  language: string;
  subforem_id: number;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: DevToUser;
}
