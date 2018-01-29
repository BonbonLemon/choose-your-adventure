import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <ul className="navbar-nav">
    <Link to="/login" className="session-links">
      <button className="btn btn-outline-info my-2 my-sm-0">Login</button>
    </Link>
    <Link to="/signup" className="session-links">
      <button className="btn btn-outline-info my-2 my-sm-0">Sign up</button>
    </Link>
  </ul>
);

const logoutLink = (currentUser, logout) => (
  <ul className="navbar-nav">
  	<li className="nav-item">
      <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={logout}>Log Out</button>
  	</li>
  </ul>
);

const Navbar = ({ currentUser, logout }) => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <Link to="/" className="navbar-brand">Choose Your Adventure</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      { currentUser ? logoutLink(currentUser, logout) : sessionLinks() }
    </div>
  </nav>
);

export default Navbar;
