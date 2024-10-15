import React from 'react';
import Signup from '../components/Signup';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h4>Create a New Account</h4>
      
      {/* Signup form component */}
      <Signup />

      {/* Link to the login page */}
      <p style={{ marginTop: '20px' }}>
        Already have an account?{' '}
        <Link to="/" style={{ textDecoration: 'none', color: '#3f51b5' }}>
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
