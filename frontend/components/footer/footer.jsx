import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer card bg-light">
      <div className="card-body">
        <Link to="/about" className="card-link">About</Link>
        <Link to="/release-notes" className="card-link">Release Notes</Link>
      </div>
    </div>
  );
};

export default Footer;
