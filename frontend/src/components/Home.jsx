import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import '../App.css';

const Home = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Learning Hub</h1>
        <p>Your one-stop platform for learning and growth</p>
      </div>
      
      <div className="auth-container">
        <div className="auth-toggle">
          <button 
            className={`toggle-btn ${showLogin ? 'active' : ''}`}
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <button 
            className={`toggle-btn ${!showLogin ? 'active' : ''}`}
            onClick={() => setShowLogin(false)}
          >
            Sign Up
          </button>
        </div>
        
        <div className="auth-form">
          {showLogin ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export default Home; 