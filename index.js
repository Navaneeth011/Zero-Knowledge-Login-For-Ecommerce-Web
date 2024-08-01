// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AuthProvider from './authContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>,
  document.getElementById('root')
);
