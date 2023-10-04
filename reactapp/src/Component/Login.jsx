import React, { useState } from 'react';
import '../Asset/CSS/Login.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice';

function Loginpage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if(!formData.username || !formData.password)
    {
      event.preventDefault();
    }
    else{
    if (formData.username === 'admin' && formData.password === 'admin123') {
      dispatch(login(formData.username));
      navigate("/dash");
    } else {
      navigate('/out');
      // Handle invalid login attempt (e.g., display an error message)
    }
  }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form-header">
          <h2> Login </h2>
        </div>
        <form className="login-form">
          <div className="form-group">
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>
          <Link to="/forgot">Forgot password!!</Link>
          <p>
            Don't have an account?
            <Link to="/signup">
              <span>Signup</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
