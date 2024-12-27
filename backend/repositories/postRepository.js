const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../posts.json');

const readPosts = () => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]'); 
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading posts file:', error);
    return [];
  }
};

const writePosts = (posts) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');
    console.log('Posts saved to file successfully!');
  } catch (error) {
    console.error('Error writing to posts file:', error);
  }
};

let posts = readPosts();
let currentId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;

const getAllPosts = () => {
  return posts;
};

const createPost = ({ title, content, summary }) => {
  const newPost = {
    id: currentId++,
    title,
    content,
    summary,
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);
  writePosts(posts); 
  return newPost;
};

const getPostById = (id) => {
  return posts.find((post) => post.id === parseInt(id));
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
};
