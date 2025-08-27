import BlogCard from "./BlogCard";

import { Blog } from "@/types";
import Section from "../Section";

const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  const featuredBlogs = blogs.slice(0, 3);

  if (!featuredBlogs.length) return null;

  return (
    <Section
      title="Blogs"
      description="Learnings and explorations on"
      descriptionMuted="the Modern Web"
      link="/blogs"
      linkText="All Blogs"
    >
      <div className="flex flex-wrap xl:flex-nowrap justify-center gap-6 md:gap-9 xl:gap-12">
        {featuredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Section>
  );
};

export default Blogs;
