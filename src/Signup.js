import React, { useState } from 'react';
import './Signup.css';
const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleSignup = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
  };
  return (
    <div className="box">
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" required />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="phone number" required />
        </div>
        <div>
          Are you admin? <a href="/Admin.js">Admin</a>
        </div>
        <div>
          Are you a first responder?<a href="/Responder.js"> responder page </a>
        </div>
        <p>
          By signing up, you agree to our <a href="/privacy-policy">Privacy Policy</a> and{' '}
          <a href="/terms-of-service">Terms of Service</a>.
        </p>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login.js">Login here</a>
      </p>
    </div>
  );
};

export default SignupForm;