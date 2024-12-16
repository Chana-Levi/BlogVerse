import React from 'react';
import PostList from './PostList';

const PostHome = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: '#6f42c1' }}>
        Welcome to My Blog
      </h1>
      <PostList />
    </div>
  );
};

export default PostHome;
