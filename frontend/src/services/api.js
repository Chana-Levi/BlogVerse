import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  console.log('Token being sent:', token || 'No token found'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
  } else {
    console.warn('Warning: No token found in localStorage!');
  }
  return config;
}, (error) => {
  console.error('Request Interceptor Error:', error);
  return Promise.reject(error);
});

export const fetchPosts = async () => {
  try {
    const response = await api.get('/posts');
    console.log('Fetched Posts:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.response?.data || error.message);
    throw new Error('Failed to fetch posts. Please try again.');
  }
};
export const getPost = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    debugger
    console.log('Fetched Post:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts', error.response?.data || error.message);
    throw new Error('Failed to fetch posts. Please try again.');
  }
};

export const createPost = async (post) => {
  try {
    console.log('Creating Post:', post); 
    const response = await api.post('/posts', post);
    console.log('Post Created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error.response?.data || error.message);
    throw new Error('Failed to create post. Please try again.');
  }
};

export const summarizePost = async (content) => {
  try {
    console.log('Summarizing Content:', content);
    const response = await api.post('/posts/summarize', { content });
    // const response = await api.post('/summarize', { content });
    console.log('Summary Response:', response.data); 
    return response.data.summary;
  } catch (error) {
    console.error('Error generating summary:', error.response?.data || error.message);
    throw new Error('Failed to generate summary. Please try again.');
  }
};

export default api;