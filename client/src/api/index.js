import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = async () => {
  const posts = await axios.get(url);
  return posts;
};

export const createPost = async (post) => {
  return await axios.post(url, post);
};

export const updatePost = async (id, post) => {
  return await axios.patch(`${url}/${id}`, post);
};

export const deletePost = async (id) => await axios.delete(`${url}/${id}`);

export const likePost = async (id) => {
  return await axios.patch(`${url}/${id}/likePost`);
};
