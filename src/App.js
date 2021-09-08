import AllBlogs from "./pages/AllBlogs";
import SingleBlog from "./pages/SingleBlog";
import Form from "./pages/Form";
import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";

function App(props) {
  // style
  const h1 = {
    textAlign: "center",
  };

  const button = {
    backgroundColor: "mediumaquamarine",
    color: "white",
    padding: "10px",
    display: "block",
    margin: "auto",
    border: "none",
    borderRadius: "5px",
  };

  //API
  const url = "https://blog-app-tw.herokuapp.com/blogposts/";

  // State to hold list of blogs
  const [blogPosts, setBlogPosts] = useState([]);

  const nullBlog = {
    title: "",
    body: "",
  };

  const [targetBlogPost, setTargetBlogPost] = useState(nullBlog);

  // functions
  const getBlogPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBlogPosts(data);
  };

  const addBlogPosts = async (newBlog) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });
    getBlogPosts();
  };

  const getTargetBlog = async (blog) => {
    setTargetBlogPost(blog);
    props.history.push("/edit");
  };

  const updateBlog = async (blog) => {
    const response = await fetch(url + blog.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    getBlogPosts();
  };

  const deleteBlog = async (blog) => {
    const response = await fetch(url + blog.id + "/", {
      method: "delete",
    });
    getBlogPosts();
    props.history.push("/");
  };

  // useEffects
  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <div className="App">
      <h1 style={h1}>My Blog</h1>
      <Link to="/new">
        <button style={button}>Create New Blog Post</button>
      </Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <AllBlogs {...routerProps} blogPosts={blogPosts} />
          )}
        />
        <Route
          exact
          path="/blogpost/:id"
          render={(routerProps) => (
            <SingleBlog
              {...routerProps}
              blogPosts={blogPosts}
              edit={getTargetBlog}
              deleteBlog={deleteBlog}
            />
          )}
        />
        <Route
          exact
          path="/new"
          render={(routerProps) => (
            <Form
              {...routerProps}
              initialBlog={nullBlog}
              handleSubmit={addBlogPosts}
              buttonLabel="Create Blog"
            />
          )}
        />
        <Route
          path="/edit"
          render={(routerProps) => (
            <Form
              {...routerProps}
              initialBlog={targetBlogPost}
              handleSubmit={updateBlog}
              buttonLabel="Update Blog"
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
