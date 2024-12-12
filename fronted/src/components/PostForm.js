import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/api/posts', {
        title,
        content,
      });
      setSuccess('Post created successfully!');
      setTitle('');
      setContent('');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      setError('Error creating post, please try again.');
      console.error('Error creating post', error);
    }
  };

  return (
    <div className="container mt-5">
      <Card className="shadow-lg p-4 rounded-4" style={{ maxWidth: '700px', margin: 'auto', background: '#f9f9f9' }}>
        <Card.Body>
          <h3 className="text-center" style={{ fontSize: '2rem', color: '#6f42c1', fontWeight: 'bold', marginBottom: '2rem' }}>
            Create a New Post
          </h3>
          
          {/* הודעות שגיאה/הצלחה */}
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          {/* טופס יצירת הפוסט */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
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
                }}
              />
            </Form.Group>

            <Form.Group controlId="content" className="mt-4">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="Write your post content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                style={{
                  borderRadius: '25px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderColor: '#ddd',
                }}
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="mt-4 w-100 py-3"
              style={{
                borderRadius: '25px',
                backgroundColor: '#6f42c1',
                border: 'none',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#5a32a3')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#6f42c1')}
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
