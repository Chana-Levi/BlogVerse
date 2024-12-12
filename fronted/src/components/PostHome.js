import React from 'react';
import PostList from './PostList';
import { Button } from 'react-bootstrap';

const PostHome = () => {
  return (
    <div>
      <Button
        onClick={() => window.location.href = '/create-post'}
        variant="primary"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px', 
          borderRadius: '25px',
          backgroundColor: '#6f42c1',
          border: 'none',
          padding: '10px 30px',
          fontSize: '1rem',
          zIndex: 1000, 
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#5a32a3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#6f42c1')}
      >
        Create New Post
      </Button>

      <div className="container mt-5">
        <h1
          style={{
            textAlign: 'center',
            color: '#6f42c1',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
          }}
        >
          Welcome to My Blog
        </h1>


        <PostList />
      </div>
    </div>
  );
};

export default PostHome;
