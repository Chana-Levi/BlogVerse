import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// Interceptor להוספת הטוקן לכל בקשה
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// פונקציות לביצוע בקשות
export const fetchPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const createPost = async (post) => {
  const response = await api.post('/posts', post);
  return response.data;
};

export default api;
