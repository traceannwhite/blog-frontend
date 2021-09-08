import React, { useState } from "react";

const Form = ({ initialBlog, handleSubmit, buttonLabel, history }) => {
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "10px 10px",
  };

  const body = {
    height: "25vh",
  };
  /////////////////////////
  // THe Form Data State
  //////////////////////////
  const [formData, setFormData] = useState(initialBlog);

  /////////////////////////
  // Functions
  /////////////////////////
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmission} style={formStyle}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
        placeholder="Blog Title"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.body}
        name="body"
        placeholder="Text goes here."
        style={body}
      />
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;
