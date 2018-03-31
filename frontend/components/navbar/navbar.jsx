import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/login" className="session-links nav-link">Login</Link>
    </li>
  </ul>
);

const logoutLink = (currentUser, logout) => (
  <ul className="navbar-nav">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        { currentUser.username }
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#">My Profile</a>
        <a className="dropdown-item" href="#" onClick={logout}>Log Out</a>
      </div>
    </li>
  </ul>
);

const Navbar = ({ currentUser, logout }) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <Link to="/" className="navbar-brand">Choose Your Adventure</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">

      </ul>
      { currentUser ? logoutLink(currentUser, logout) : sessionLinks() }
    </div>
  </nav>
);

export default Navbar;
