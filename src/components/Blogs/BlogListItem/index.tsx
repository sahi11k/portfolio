import Image from "next/image";
import React from "react";
import { Blog } from "@/types";
import ArrowIcon from "@/components/ArrowIcon";
import Link from "next/link";

interface BlogListItemProps {
  blog: Blog;
}

const BlogListItem = ({ blog }: BlogListItemProps) => {
  return (
    <div className="bg-neutral-100 flex-1 p-6 flex gap-5">
      <div className="relative w-40 h-28 md:w-64 md:h-40 flex-shrink-0 overflow-hidden bg-black">
        <Image
          src={blog.image ?? ""}
          className="object-cover"
          alt={`Blog Hero Image on ${blog.title}`}
          fill
          sizes="(max-width: 768px) 160px, 256px"
        />
      </div>
      <div className="flex-8 flex flex-col gap-2 text-center">
        <div className="flex gap-2 text-neutral-500 text-sm font-semibold">
          <span>{blog.publishedAt.toLocaleDateString()}</span>
          <span>•</span>
          <span>{blog.readingTimeMinutes} min read</span>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-left">
          <Link
            href={blog.link}
            target="_blank"
            className="flex hover:underline"
          >
            <h1 className="text-lg font-bold">{blog.title}</h1>
          </Link>
          <p className="text-sm">{blog.description}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {blog?.tagList?.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-neutral-200 text-neutral-500 py-1 px-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListItem;
