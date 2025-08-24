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
    <div className="mb-10">
      <div className="flex items-center mb-12">
        <Link href="/">
          <Button variant="text" className="!p-0">
            <ArrowIcon direction="left" /> Back
          </Button>
        </Link>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="flex-1 w-full font-semibold text-center">Writings</h1>
          <p className="text-center text-4xl font-semibold">
            All Blogs <span className="text-neutral-400">Catalog</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {blogs.map((blog) => (
          <BlogListItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
