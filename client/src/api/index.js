import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = async () => {
  const posts = await axios.get(url);
  return posts;
};

export const createPost = async (post) => {
  return await axios.post(url, post);
};
