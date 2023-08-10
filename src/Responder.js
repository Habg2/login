import React, { useState } from 'react';
import './Responder.css';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };

  const handleContactUs = () => {
    // Handle contact us logic he
  };

  return (
    <div className="login-container">
      <h2>First Responder Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div className="forgot-password">
        <span onClick={handleForgotPassword}>Forgot Password?</span>
      </div>
      <div className="contact-us">
        <span onClick={handleContactUs}>Contact Us</span>
      </div>
    </div>
  );
};

export default LoginPage;