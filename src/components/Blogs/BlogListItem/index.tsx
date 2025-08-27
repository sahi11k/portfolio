import Image from "next/image";
import React from "react";
import { Blog } from "@/types";
import ArrowIcon from "@/components/ArrowIcon";
import Button from "@/components/Button";

interface BlogListItemProps {
  blog: Blog;
}

const BlogListItem = ({ blog }: BlogListItemProps) => {
  return (
    <div className="flex flex-col flex-col-reverse md:flex-row bg-bg-container p-6 md:p-12 gap-6 md:gap-12 rounded-4xl">
      <div className="flex-6 flex flex-col justify-between gap-6 md:gap-9 xl:gap-12">
        <div className="flex flex-col gap-2 md:gap-4 xl:gap-6">
          <div className="text-2xl md:text-3xl xl:text-4xl font-semibold">
            {blog.title}
          </div>
          <div className="leading-relaxed tracking-wide font-light text-lg md:text-xl xl:text-2xl">
            {blog.description}
          </div>

          <div className="flex flex-wrap items-center text-sm md:text-base xl:text-lg">
            {blog.tagList?.map((stack, idx) => (
              <React.Fragment key={stack}>
                <span className="text-text-muted">{stack}</span>
                {idx < (blog.tagList?.length ?? 0) - 1 && (
                  <span className="mx-2 text-text-muted">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-start gap-6">
          <Button variant="primary" href={blog.link}>
            Read Full Article <ArrowIcon />
          </Button>
        </div>
      </div>
      <div className="flex-4 md:self-center">
        <div className="relative h-60 w-full md:h-70 xl:h-80 md:w-full overflow-hidden rounded-2xl">
          <Image
            src={blog.image ?? ""}
            alt={blog.title ?? "blog screenshot"}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogListItem;
