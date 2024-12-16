import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { username, password });
      setMessage('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'An error occurred during registration';
      setMessage(`Registration failed: ${errorMessage}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4 mx-auto" style={{ maxWidth: '400px', background: '#f9f9f9' }}>
        <h2 className="text-center mb-4" style={{ color: '#6f42c1', fontWeight: 'bold' }}>Register</h2>
        {message && (
          <div className={`alert ${message.includes('failed') ? 'alert-danger' : 'alert-success'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleRegister}>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
