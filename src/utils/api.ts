import { DevToArticle } from "@/types";

export const transformBlogsResponse = (data: DevToArticle[]) => {
  return data.map((item: DevToArticle) => ({
    id: item.id ?? 0,
    publishedAt: new Date(item.published_at ?? ""),
    link: item.url ?? "",
    tagList: item.tag_list ?? [],
    description: item.description ?? "",
    title: item.title ?? "",
    image: item.cover_image ?? "",
    readingTimeMinutes: item.reading_time_minutes ?? 0,
  }));
};
