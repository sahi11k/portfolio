import ArrowIcon from "@/components/ArrowIcon";
import Button from "@/components/Button";
import Link from "next/link";
import { fetchBlogsFromDevto } from "@/apis";
import { transformBlogsResponse } from "@/utils/api";
import BlogListItem from "@/components/Blogs/BlogListItem";

export const revalidate = 3600;

export default async function BlogsPage() {
  const res = await fetchBlogsFromDevto();
  const blogs = transformBlogsResponse(res);

  return (
    <div>
      <div className="relative flex items-center justify-center mb-6 xl:mb-12">
        <Link href="/">
          <Button
            variant="icon"
            className="gap-2 absolute top-1/2 -translate-y-1/2 left-0"
          >
            <ArrowIcon direction="left" /> Back
          </Button>
        </Link>
        <h1 className="font-medium text-2xl md:text-4xl xl:text-6xl">
          Blog <span className="text-text-muted">Archive</span>
        </h1>
      </div>
      <div className="flex flex-col gap-6 md:gap-12">
        {blogs.map((blog) => (
          <BlogListItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
