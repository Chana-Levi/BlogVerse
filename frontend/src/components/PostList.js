import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="row justify-content-center">
        {posts.length === 0 ? (
          <p className="text-center w-100">No posts available yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <Card
                className="shadow-lg p-4 rounded-4"
                style={{
                  maxWidth: '100%',
                  background: '#f9f9f9',
                  marginBottom: '20px',
                  borderRadius: '25px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Card.Body>
                  <Card.Title
                    className="text-center"
                    style={{
                      fontSize: '1.5rem',
                      color: '#6f42c1',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                    }}
                  >
                    {post.title}
                  </Card.Title>
                  <Card.Text style={{ color: '#555' }}>
                    {post.content.length > 100
                      ? `${post.content.substring(0, 100)}...`
                      : post.content}
                  </Card.Text>
                  <div className="d-flex justify-content-center mt-4">
                    <Link to={`/post/${post.id}`}>
                      <Button
                        variant="outline-dark"
                        style={{
                          borderRadius: '25px',
                          borderColor: '#6f42c1',
                          color: '#6f42c1',
                          transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#6f42c1')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                      >
                        Read more
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostList;
