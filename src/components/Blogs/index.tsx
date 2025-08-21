import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="col-span-4">
      <div className="flex justify-between">
        <h1>Projects</h1>
        <button>View All</button>
      </div>
      <div className="flex gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
