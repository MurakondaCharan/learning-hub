import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9090/api/users/signup', formData);
      console.log('Signup successful:', response.data);
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Check console.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2><i className="fas fa-user-plus"></i> Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label><i className="fas fa-user"></i> Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label><i className="fas fa-envelope"></i> Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label><i className="fas fa-lock"></i> Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        <p className="switch-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
