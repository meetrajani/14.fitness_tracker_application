import React from 'react';
import Login from '../components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h4>Log In to Your Account</h4>
      
      {/* Login form component */}
      <Login />

      {/* Link to the signup page */}
      <p style={{ marginTop: '20px' }}>
        Don’t have an account?{' '}
        <Link to="/signup" style={{ textDecoration: 'none', color: '#3f51b5' }}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
