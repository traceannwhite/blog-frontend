import React from "react";
import Blog from "../components/Blog";

const AllBlogs = (props) => {
  return props.blogPosts.map((blogPost) => (
    <Blog blogPost={blogPost} key={blogPost.id} />
  ));
};

export default AllBlogs;
