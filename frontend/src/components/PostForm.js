import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import api, { summarizePost ,createPost} from '../services/api';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setError('You must be logged in to create a post. Please register or log in.');
      return;
    }
    try {
      const postData = { title, content };
    if (summary) {
      postData.summary = summary;
    }
    await createPost(postData);
      setSuccess('Post created successfully!');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setError('Error creating post, please try again.');
    }
  };

  const handleSummarize = async () => {
    if (!content) return alert('Please enter content to summarize!');
    try {
      const result = await summarizePost(content);
      setSummary(result);
    } catch (err) {
      console.error('Error summarizing content:', err);
      setError('Failed to generate summary.');
    }
  };

  return (
    <div className="container mt-5">
      <Card className="shadow-lg p-4 rounded-4" style={{ maxWidth: '700px', margin: 'auto', background: '#f9f9f9' }}>
        <Card.Body>
          <h3 className="text-center mb-4" style={{ color: '#6f42c1', fontSize: '2.5rem', fontWeight: 'bold' }}>
            Create a New Post
          </h3>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          {summary && (
            <Alert variant="info" className="mt-3">
              <strong>Summary:</strong> {summary}
            </Alert>
          )}

          {!isLoggedIn ? (
            <Alert variant="warning" className="mt-3">
              You need to <strong>log in</strong> or <strong>register</strong> to create a post.
            </Alert>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label style={{ fontWeight: 'bold', color: '#6f42c1' }}>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter post title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  style={{ borderRadius: '25px', padding: '10px' }}
                />
              </Form.Group>

              <Form.Group controlId="content" className="mt-4">
                <Form.Label style={{ fontWeight: 'bold', color: '#6f42c1' }}>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your post content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  style={{ borderRadius: '25px', padding: '10px' }}
                />
              </Form.Group>

              <Button
                type="button"
                className="mt-3 w-100"
                style={{
                  backgroundColor: '#5a32a3',
                  color: '#fff',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  padding: '10px',
                }}
                onClick={handleSummarize}
              >
                Generate Summary
              </Button>

              <Button
                type="submit"
                className="mt-4 w-100"
                style={{
                  backgroundColor: '#6f42c1',
                  border: 'none',
                  color: '#fff',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  padding: '10px',
                }}
              >
                Create Post
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostForm;
