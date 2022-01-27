import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).send(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const newPost = await PostMessage.create(body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Not Found" });
  }
  const data = await PostMessage.findByIdAndUpdate(id, req.body, { new: true });
  res.status(201).json(data);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Not Found" });
  }
  try {
    await PostMessage.findByIdAndDelete(id);
    res.status(202).json({ message: "post deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!req.userId)
    return res.status(404).json({ message: "Not AUthenticated" });
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ message: "Not Found" });
  // }
  try {
    const post = await PostMessage.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post);

    res.status(201).send(updatedPost);
  } catch (err) {
    console.log(err);
  }
};
