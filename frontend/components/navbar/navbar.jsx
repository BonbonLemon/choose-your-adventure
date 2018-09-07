import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/login" className="session-links nav-link">Log In</Link>
    </li>
  </ul>
);

const logOutLink = (currentUser, logOut) => (
  <ul className="navbar-nav">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        { currentUser.username }
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <Link to={ "/users/" + currentUser.username } className="dropdown-item">My Profile</Link>
        <a className="dropdown-item" href="#" onClick={logOut}>Log Out</a>
      </div>
    </li>
  </ul>
);

const Navbar = ({ currentUser, logOut }) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <Link to="/" className="navbar-brand">Choose Your Adventure</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">

      </ul>
      { currentUser ? logOutLink(currentUser, logOut) : sessionLinks() }
    </div>
  </nav>
);

export default Navbar;
