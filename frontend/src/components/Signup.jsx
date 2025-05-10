import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!formData.username.trim()) {
      setError('Username is required');
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    if (!formData.password.trim()) {
      setError('Password is required');
      return;
    }

    console.log('Submitting signup request with data:', {
      username: formData.username,
      email: formData.email,
      password: '***' // Don't log actual password
    });

    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Signup response:', response.data);

      if (response.data) {
        setSuccess(response.data.message || 'Registration successful! You can now login.');
        setFormData({
          username: '',
          email: '',
          password: ''
        });
      }
    } catch (err) {
      console.error('Signup error:', err);
      if (err.response) {
        console.error('Error response:', err.response.data);
        setError(err.response.data || 'Registration failed. Please try again.');
      } else if (err.request) {
        console.error('No response received:', err.request);
        setError('No response from server. Please check if the server is running.');
      } else {
        console.error('Error setting up request:', err.message);
        setError('Error: ' + err.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          minLength={3}
          placeholder="Enter your username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" className="submit-btn">Register</button>
    </form>
  );
};

export default Signup; 