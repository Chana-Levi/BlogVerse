const postService = require('../services/postService');
const axios = require('axios');

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

// פונקציה ליצירת תקציר מה-LLM
const summarizePost = async (req, res) => {
    const { content } = req.body;
    const apiKey = process.env.OPENAI_API_KEY;
  
    // בדיקה אם התוכן ריק
    if (!content || content.trim() === '') {
      return res.status(400).json({ error: 'Content is required for summarization.' });
    }
  
    try {
      // שליחת בקשה ל-OpenAI
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Summarize the following content in 1-2 sentences.' },
            { role: 'user', content: content }
          ],
          max_tokens: 150
        },
        { headers: { Authorization: `Bearer ${apiKey}` } }
      );
  
      // הדפסת התגובה לבדיקה
      console.log('OpenAI Response:', response.data);
  
      // שליפת התקציר מהתשובה
      const summary = response.data.choices[0]?.message?.content || 'No summary available';
      res.json({ summary });
    } catch (error) {
      console.error('Error generating summary:', error.response?.data || error.message);
      res.status(500).json({ error: 'Failed to generate summary', details: error.message });
    }
  };
  

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  summarizePost,
};
