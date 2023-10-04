import React, { useState } from 'react';
import '../Asset/CSS/Login.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
function Forget() {
  const navigate = useNavigate();
  const handleSubmit=()=>{
    navigate("/");
  }
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form-header">
          <h2> Forgot Password </h2>
        </div>
        <form className="login-form">
          <div className="form-group">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="New Password" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Confirm Password" required />
          </div>
          <div className="form-group">
          <button type="submit" onClick={handleSubmit}>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forget;
