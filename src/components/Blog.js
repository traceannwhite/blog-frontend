import React from "react";
import { Link } from "react-router-dom";

const Post = ({ blogPost }) => {
  
  const divStyle = {
    textAlign: "center",
    border: "2px solid black",
    margin: "5px auto",
    width: "80%",
  };
  return (
    <div style={divStyle}>
      <Link to={`/blogPost/${blogPost.id}`}>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.body}</p>
      </Link>
    </div>
  );
};

export default Post;
