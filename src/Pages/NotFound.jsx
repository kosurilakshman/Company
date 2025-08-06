// src/Components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import Notfound from '../assets/Review Images/NotFound.svg'
import './Notfound.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
    <img src={Notfound} alt="404 Not Found" className="not-found-image" />
    <h1>Oops! Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/" className="back-home">Go Back Home</Link>
  </div>
  );
};

export default NotFound;
