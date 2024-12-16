import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Alert, Container, Row, Col } from 'react-bootstrap';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        setError('Error fetching post, please try again.');
        console.error('Error fetching post', error);
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
            <Card className="shadow-lg p-4 rounded-4" style={{ maxWidth: '700px', margin: 'auto', background: '#f9f9f9' }}>
              <Card.Body>
                <h3 className="text-center" style={{ fontSize: '2rem', color: '#6f42c1', fontWeight: 'bold', marginBottom: '2rem' }}>
                  {post.title}
                </h3>

                {/* תמונה אם קיימת */}
                {post.image && (
                  <img
                    src={`http://localhost:8080/uploads/${post.image}`}
                    alt={post.title}
                    className="img-fluid mb-4"
                    style={{ borderRadius: '10px' }}
                  />
                )}

                {/* תוכן הפוסט */}
                <Card.Text>{post.content}</Card.Text>

                {/* כפתור חזרה לדף הבית */}
                <div className="d-flex justify-content-center mt-4">
                  <Button
                    variant="primary"
                    onClick={() => navigate('/')}
                    style={{
                      borderRadius: '25px',
                      backgroundColor: '#6f42c1',
                      border: 'none',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#5a32a3')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#6f42c1')}
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
