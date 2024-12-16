import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); // בדיקה אם יש טוקן

  const handleLogout = () => {
    localStorage.removeItem('token'); // מחיקת הטוקן
    navigate('/login'); // חזרה לדף ההתחברות
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#f9f9f9', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        {/* שם הבלוג */}
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontWeight: 'bold',
            color: '#6f42c1',
            fontSize: '1.8rem',
          }}
        >
          My Blog
        </Navbar.Brand>

        {/* ניווט */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              as={Link}
              to="/"
              style={{
                color: '#6f42c1',
                fontWeight: 'bold',
                marginRight: '15px',
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.color = '#5a32a3')}
              onMouseOut={(e) => (e.target.style.color = '#6f42c1')}
            >
              Home
            </Nav.Link>

            {isLoggedIn && (
              <Nav.Link
                as={Link}
                to="/create-post"
                style={{
                  color: '#6f42c1',
                  fontWeight: 'bold',
                  marginRight: '15px',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.color = '#5a32a3')}
                onMouseOut={(e) => (e.target.style.color = '#6f42c1')}
              >
                Create Post
              </Nav.Link>
            )}

            {!isLoggedIn ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/register"
                  style={{
                    color: '#6f42c1',
                    fontWeight: 'bold',
                    marginRight: '15px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#5a32a3')}
                  onMouseOut={(e) => (e.target.style.color = '#6f42c1')}
                >
                  Register
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/login"
                  style={{
                    color: '#6f42c1',
                    fontWeight: 'bold',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#5a32a3')}
                  onMouseOut={(e) => (e.target.style.color = '#6f42c1')}
                >
                  Login
                </Nav.Link>
              </>
            ) : (
              <Button
                onClick={handleLogout}
                style={{
                  backgroundColor: '#6f42c1',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 'bold',
                  marginLeft: '15px',
                  borderRadius: '25px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#5a32a3')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#6f42c1')}
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
