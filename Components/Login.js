import React from 'react';
import { GoogleLogin } from 'react-google-login';

function Login({ setIsAuthenticated }) {
  const clientId = "913094900590-s7fmkm51tnv3fl8oulkr01784tk8t9p0.apps.googleusercontent.com";

  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    setIsAuthenticated(true);
  };

  const handleLoginFailure = (response) => {
    console.log('Login Failed:', response);
    // alert('Login failed');
  };

  return (
    <div className="login">
      <h2>Login User Authentication</h2>
      <GoogleLogin
        clientId={clientId}
        buttonText="Signin with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Login;
