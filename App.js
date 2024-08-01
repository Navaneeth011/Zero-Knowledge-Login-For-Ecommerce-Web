import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Initial from './components/initial';
import Landing from './components/landing';
import Login from './components/Login';
import Shoes from './components/shoes';
import Signin from './components/signin';
import Sidebar from './components/sidebar';
import Watches from './components/watches';
import Wallets from './components/wallets';
import Handbags from './components/handbags';
import AuthProvider from './authContext';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/landing" element={<Landing />} />
            <Route exact path="/" element={<Initial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/handbags" element={<Handbags />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/sidebar" element={<Sidebar />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
