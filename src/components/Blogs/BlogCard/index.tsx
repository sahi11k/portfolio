import Image from "next/image";
import React from "react";
import { Blog } from "@/types";
import ArrowIcon from "@/components/ArrowIcon";
import Button from "@/components/Button";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="bg-bg-container p-6 flex flex-col gap-6 rounded-4xl tracking-wide w-full md:w-100">
      <div className="relative h-60 overflow-hidden rounded-2xl">
        <Image
          src={blog.image ?? ""}
          className="object-cover"
          alt={`Blog Hero Image on ${blog.title}`}
          fill
        />
      </div>
      <div className="flex-1 flex flex-col gap-1 text-center">
        <div className="flex gap-2 text-text-muted text-sm lg:text-base">
          <span>{blog.publishedAt.toLocaleDateString()}</span>
          <span>•</span>
          <span>{blog.readingTimeMinutes} min read</span>
        </div>
        <div className="flex-1 flex flex-col gap-3 text-left">
          <h1 className="text-xl lg:text-2xl font-semibold break-words">
            {blog.title}
          </h1>
          <p className="text-base lg:text-lg font-light">{blog.description}</p>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex-1 flex flex-wrap">
            {blog?.tagList?.map((tag, index) => (
              <span
                key={tag}
                className="flex items-center text-text-muted text-sm lg:text-base"
              >
                {index > 0 && <span className="mx-2">•</span>}
                <span>{tag}</span>
              </span>
            ))}
          </div>
          <Button
            variant="secondary"
            className="rounded-full !p-3 !bg-bg-container"
            href={blog.link}
          >
            <ArrowIcon className="stroke-[1.25px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
