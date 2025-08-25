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
    <div className="flex min-h-80 bg-bg-container p-12 gap-24 rounded-4xl">
      <div className="flex-6 flex flex-col justify-between gap-24">
        <div>
          <div className="text-4xl font-semibold mb-6">{blog.title}</div>
          <div className="leading-relaxed text-2xl tracking-wide font-light">
            {blog.description}
          </div>

          <div className="mt-6 flex flex-wrap items-center text-lg">
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
        <div className="flex justify-start gap-6">
          <Button variant="primary" href={blog.link}>
            Read Full Article <ArrowIcon />
          </Button>
        </div>
      </div>
      <div className="flex-4 self-center">
        <div className="relative h-80 overflow-hidden rounded-2xl">
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
