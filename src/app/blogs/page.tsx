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
      <div className="flex flex-col gap-6 pb-12 relative">
        <Link href="/">
          <Button
            variant="icon"
            className="gap-2 absolute top-1/2 -translate-y-1/2 left-0"
          >
            <ArrowIcon direction="left" /> Back
          </Button>
        </Link>
        <h1 className="text-center text-2xl tracking-wide">Blogs</h1>
        <p className="text-center text-6xl font-medium">
          All Blogs <span className="text-text-muted">Catalog</span>
        </p>
      </div>
      <div className="flex flex-col gap-12">
        {blogs.map((blog) => (
          <BlogListItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
