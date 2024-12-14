import axios from 'axios';

const BASE_URL = '/api/posts';

export const fetchPosts = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const createPost = async (post) => {
    const response = await axios.post(BASE_URL, post);
    return response.data;
};
