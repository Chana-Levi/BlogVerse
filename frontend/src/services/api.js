import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  console.log('Token being sent:', token || 'No token found'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // הוספת הטוקן ל-Headers
  } else {
    console.warn('Warning: No token found in localStorage!');
  }
  return config;
}, (error) => {
  console.error('Request Interceptor Error:', error);
  return Promise.reject(error);
});

// פונקציה לקבלת כל הפוסטים
export const fetchPosts = async () => {
  try {
    const response = await api.get('/posts');
    console.log('Fetched Posts:', response.data); // הדפסת הפוסטים שהתקבלו
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.response?.data || error.message);
    throw new Error('Failed to fetch posts. Please try again.');
  }
};

// פונקציה ליצירת פוסט חדש
export const createPost = async (post) => {
  try {
    console.log('Creating Post:', post); // הדפסת הפרטים שנשלחים
    const response = await api.post('/posts', post);
    console.log('Post Created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error.response?.data || error.message);
    throw new Error('Failed to create post. Please try again.');
  }
};

// פונקציה לשליחת תוכן ליצירת תקציר
export const summarizePost = async (content) => {
  try {
    console.log('Summarizing Content:', content); // הדפסת התוכן שנשלח לסיכום
    const response = await api.post('/posts/summarize', { content });
    console.log('Summary Response:', response.data); // הדפסת התשובה מהשרת
    return response.data.summary; // קבלת התקציר מהשרת
  } catch (error) {
    console.error('Error generating summary:', error.response?.data || error.message);
    throw new Error('Failed to generate summary. Please try again.');
  }
};

// ייצוא ברירת מחדל של האובייקט API
export default api;
