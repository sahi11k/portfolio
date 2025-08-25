import BlogCard from "./BlogCard";
import Button from "../Button";

import ArrowUpright from "public/icons/arrow-up-right.svg";
import Link from "next/link";

import { Blog } from "@/types";

const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  const featuredBlogs = blogs.slice(0, 3);

  if (!featuredBlogs.length) return null;

  return (
    <div className="col-span-4">
      <div className="flex flex-col gap-6 pb-12">
        <h1 className="text-center text-2xl tracking-wide">Blogs</h1>
        <p className="text-center text-6xl font-medium">
          Learnings and explorations on <br />
          <span className="text-text-muted">the Modern Web</span>.
        </p>
      </div>
      <div className="flex gap-8">
        {featuredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link href="/blogs">
          <Button variant="primary">
            All Blogs <ArrowUpright />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
