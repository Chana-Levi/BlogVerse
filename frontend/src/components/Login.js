import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful! Redirecting...');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setMessage('Login failed: ' + (err.response?.data?.message || 'Please try again.'));
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4 mx-auto" style={{ maxWidth: '400px', background: '#f9f9f9' }}>
        <h2 className="text-center mb-4" style={{ color: '#6f42c1', fontWeight: 'bold' }}>Login</h2>
        {message && (
          <div className={`alert ${message.includes('failed') ? 'alert-danger' : 'alert-success'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ borderRadius: '25px' }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: '25px' }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: '#6f42c1',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '25px',
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
