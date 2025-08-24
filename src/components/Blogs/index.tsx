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
      <div className="flex flex-col gap-2 pb-12">
        <h1 className="font-semibold text-center">Writings</h1>
        <p className="text-center text-4xl font-semibold">
          Learnings and explorations on <br />
          <span className="text-neutral-400">the Modern Web</span>.
        </p>
      </div>
      <div className="flex gap-5">
        {featuredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
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
