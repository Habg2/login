import React from 'react'
import './css/signin.css';

function Login() {
  return (
    <div>
      <div className="box">
        <h1>Login Page</h1>
        <form>
          <input type="text" className="fclassName" placeholder="Enter username" />
          <input type="password" className="password" placeholder="Enter Password" />
          <button type="submit" className="LOGIN" value="LOGIN">LOGIN</button>
          Dont have an account?<a href="Signup.js" className="signup-link" style={{ color: '#ffc107' }}>SIGNUP</a>
        </form>
      </div>
    </div>
  );
}
export default Login;


    