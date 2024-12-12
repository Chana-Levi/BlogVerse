
import React from 'react';
import PostList from './PostList';

const PostHome = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <PostList />
      <button onClick={() => window.location.href = '/create-post'}>Create New Post</button>
    </div>
  );
};

export default PostHome;
