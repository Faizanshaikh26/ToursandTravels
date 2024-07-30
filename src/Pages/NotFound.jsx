import React from 'react';
import { Link } from 'react-router-dom';
// Make sure to create this CSS file or adjust according to your existing styles

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for does not exist.</p>
      <Link to="/" className="not-found-link">
        <button className="not-found-button">Go to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
