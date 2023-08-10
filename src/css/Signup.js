import React from 'react';
import './signup.css';
const SignUpForm = () => {
  return (
    <div>
      <div className="box2">
        <h1>SIGN UP Here</h1>
        <div className="err"></div>
        <form action="signup.php" method="post">
          <input type="text" name="fname" id="" placeholder="Enter First name" required />
          <input type="text" name="lname" id="" placeholder="Enter Last name" required />
          <input type="email" name="email" id="" placeholder="Enter Email" required />
          <label>Sex</label>
          <input type="radio" name="sex" id="" value="Male" required />Male
          <input type="radio" name="sex" id="" value="Female" required />Female
          <input type="password" name="pass1" id="" placeholder="Enter Password" required />
          <input type="password" name="pass2" id="" placeholder="Confirm Password" required />
          <input type="submit" name="SIGNUP" value="SIGNUP" />
          Already a member?<a href="login.js" style={{ color: '#ffc107' }}>LOGIN</a>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;











