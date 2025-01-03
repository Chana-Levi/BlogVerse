import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { getPost } from '../services/api';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPost(id);
        debugger
        console.log('Fetched post:', response);
        setPost(response);
        setSummary(response.summary);

      } catch (error) {
        setError('Error fetching post or summary, please try again.');
        console.error('Error:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post && !error) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-5">
      {error && <Alert variant="danger">{error}</Alert>}
      {post && (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg p-4 rounded-4" style={{ background: '#f9f9f9' }}>
              <Card.Body>
                <h3
                  className="text-center"
                  style={{ fontSize: '2rem', color: '#6f42c1', fontWeight: 'bold' }}
                >
                  {post.title}
                </h3>

                {summary && (
                  <Alert variant="info" className="mt-3">
                    <strong>Summary:</strong> {summary}
                  </Alert>
                )}

                <Card.Text style={{ fontSize: '1.1rem', color: '#333' }}>
                  {post.content}
                </Card.Text>

                <div className="d-flex justify-content-center mt-4">
                  <Button
                    onClick={() => navigate('/')}
                    style={{
                      backgroundColor: '#6f42c1',
                      border: 'none',
                      borderRadius: '25px',
                    }}
                  >
                    Back to Home
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default PostPage;