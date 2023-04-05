import React, { lazy } from "react";

const HeroBlog = lazy(() => import("../../Components/Sections/HeroBlog"));
const RecentBlogs = lazy(() => import("../../Components/Sections/RecentBlogs"));

const Blog = () => {
  return (
    <div>
      <HeroBlog />
      <RecentBlogs />
    </div>
  );
};

export default Blog;
