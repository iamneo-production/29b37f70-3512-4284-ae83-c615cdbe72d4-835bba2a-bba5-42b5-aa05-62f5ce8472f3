import React, { useState } from 'react';
import '../Asset/CSS/Signup.css';
import { Link } from 'react-router-dom';
function SignUpPage() {
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="signup-form-header">
          <h2>Sign Up </h2>
        </div>
        <form className="signup-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
          <p>Already have an account?<Link to ='/'><span>Login</span></Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
