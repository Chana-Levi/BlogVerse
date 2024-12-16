import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import api from '../services/api';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/posts', { title, content });
      setSuccess('Post created successfully!');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setError('Error creating post, please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <Card
        className="shadow-lg p-4 rounded-4"
        style={{
          maxWidth: '700px',
          margin: 'auto',
          background: '#f9f9f9',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Card.Body>
          <h3
            className="text-center mb-4"
            style={{
              color: '#6f42c1',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            Create a New Post
          </h3>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label style={{ fontWeight: 'bold', color: '#6f42c1' }}>
                Title
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{
                  borderRadius: '25px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderColor: '#ddd',
                  padding: '10px',
                }}
              />
            </Form.Group>

            <Form.Group controlId="content" className="mt-4">
              <Form.Label style={{ fontWeight: 'bold', color: '#6f42c1' }}>
                Content
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your post content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                style={{
                  borderRadius: '25px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderColor: '#ddd',
                  padding: '10px',
                }}
              />
            </Form.Group>

            <Button
              type="submit"
              className="mt-4 w-100"
              style={{
                backgroundColor: '#6f42c1',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                padding: '10px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = '#5a32a3')
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = '#6f42c1')
              }
            >
              Create Post
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostForm;
