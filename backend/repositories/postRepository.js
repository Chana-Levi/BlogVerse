let posts = [];
let currentId = 1;

const getAllPosts = () => {
    return posts;
};

const createPost = ({ title, content }) => {
    const newPost = { id: currentId++, title, content };
    posts.push(newPost);
    return newPost;
};

const getPostById = (id) => {
    return posts.find(post => post.id === id);
};

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
};
