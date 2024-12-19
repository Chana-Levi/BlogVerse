const postService = require('../services/postService');
const { generateSummary } = require('../services/aiService');

const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
};

const createPost = async (req, res) => {
  const { title, content, summary } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  try {
    const generatedSummary = summary || await generateSummary(content);
    const newPost = await postService.createPost({ title, content, summary: generatedSummary });
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error.message);
    res.status(500).json({ error: 'Failed to create post.' });
  }
};

const getPostById = async (req, res) => {
  const postId = parseInt(req.params.id);

  try {
    const post = await postService.getPostById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post.' });
  }
};

const summarizePost = async (req, res) => {
  const { content } = req.body;
  if (!content || content.trim() === '') {
    return res.status(400).json({ error: 'Content is required for summarization.' });
  }

  try {
    const summary = await generateSummary(content);
    res.json({ summary });
  } catch (error) {
    console.error('Error generating summary:', error.message);
    res.status(500).json({ error: 'Failed to generate summary.' });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  summarizePost,
};
