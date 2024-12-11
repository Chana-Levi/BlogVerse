const postRepository = require('../repositories/postRepository');

const getAllPosts = async () => {
    return postRepository.getAllPosts();
};

const createPost = async ({ title, content }) => {
    if (!title || !content) {
        throw new Error('Title and content are required.');
    }
    return postRepository.createPost({ title, content });
};

const getPostById = async (id) => {
    const post = postRepository.getPostById(id);
    if (!post) {
        throw new Error('Post not found.');
    }
    return post;
};

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
};
