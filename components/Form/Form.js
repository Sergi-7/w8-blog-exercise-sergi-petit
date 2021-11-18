import { useState } from "react";

const Form = () => {
  const initialPost = {
    title: "",
    body: "",
  };
  const [post, setPost] = useState(initialPost);

  const handleOnChange = (event) => {
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const createPost = async () => {
    const response = await fetch(
      "https://isdi-blog-posts-api.herokuapp.com/posts",
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    await response.json();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createPost(post);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="title">Title : </label>
      <input type="text" id="title" onChange={handleOnChange}></input>
      <label htmlFor="body">Description: </label>
      <input type="text" id="body" onChange={handleOnChange}></input>
      <button>Submit</button>
    </form>
  );
};

export default Form;
