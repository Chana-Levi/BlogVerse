const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await postService.createPost({ title, content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPostById = async (req, res) => {
  const postId = parseInt(req.params.id);
  try {
    const post = await postService.getPostById(postId);
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
};
