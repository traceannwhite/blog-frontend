import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ match, blogPosts, edit, deleteBlog }) => {
  const id = parseInt(match.params.id);
  const blogPost = blogPosts.find((blogPost) => blogPost.id === id);

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.body}</p>
      <button onClick={(event) => deleteBlog(blogPost)}>Delete</button>
      <button onClick={(event) => edit(blogPost)}>Edit</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SinglePost;
