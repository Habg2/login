import React, { useState } from 'react';
import './Admin.css'; 

function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  
    console.log('Login clicked');
  };

  const handleForgotPassword = () => {
  
    console.log('Forgot Password clicked');
  };

  return (
    <div className="admin-container">
     
      <div className="admin-form">
      <h1>Admin Page</h1>
        <label>Email or Username:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         
        />
        <button onClick={handleLogin}>Login</button><br></br> <br></br> 
        <button onClick={handleForgotPassword}>Forgot Password</button>
      </div>
    </div>
  );
}

export default AdminPage;




