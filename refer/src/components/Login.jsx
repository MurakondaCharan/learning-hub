import React from 'react';
import './Auth.css'; // Shared CSS for both Login and Signup

const LoginPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2><i className="fas fa-sign-in-alt"></i> Login to Learning Hub</h2>
        <form>
          <div className="input-group">
            <label><i className="fas fa-envelope"></i> Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label><i className="fas fa-lock"></i> Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p className="switch-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
