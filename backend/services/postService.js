let posts = []; // מערך לשמירת הפוסטים בזיכרון

const getAllPosts = async () => {
  return posts; // החזרת כל הפוסטים
};

const createPost = async ({ title, content }) => {
  if (!title || !content) {
    throw new Error('Title and content are required.');
  }

  const newPost = {
    id: posts.length + 1, // יצירת ID ייחודי לפוסט
    title,
    content,
  };

  posts.push(newPost); // הוספת הפוסט למערך
  return newPost; // החזרת הפוסט החדש
};

const getPostById = async (id) => {
  const post = posts.find((p) => p.id === parseInt(id));
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
