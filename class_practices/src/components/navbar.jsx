// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> &nbsp; 
      <Link to="/about">About</Link> &nbsp;
      <Link to='/component'>Props</Link>
    </nav>
  );
};

export default Navbar;
