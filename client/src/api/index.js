import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchPosts = async () => {
  const posts = await API.get("/posts");
  return posts;
};

export const createPost = async (post) => {
  return await API.post("/posts", post);
};

export const updatePost = async (id, post) => {
  return await API.patch(`/posts/${id}`, post);
};

export const deletePost = async (id) => await API.delete(`/posts/${id}`);

export const likePost = async (id) => {
  return await API.patch(`posts/${id}/likePost`);
};

export const signIn = (formData) => {
  return API.post(`/users/signin`, formData);
};
export const signUp = (formData) => {
  return API.post(`/users/signup`, formData);
};
