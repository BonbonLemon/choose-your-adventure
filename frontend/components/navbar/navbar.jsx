import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/login" className="nav-link active">Login</Link>
    </li>
    <li className="nav-item">
      <Link to="/signup" className="nav-link active">Sign up</Link>
    </li>
  </ul>
);

const logoutLink = (currentUser, logout) => (
  <ul className="navbar-nav">
  	<li className="nav-item">
      <a className="nav-link active" onClick={logout}>Log Out</a>
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
      <form className="form-inline my-2 my-lg-0 nav-item">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      { currentUser ? logoutLink(currentUser, logout) : sessionLinks() }
    </div>
  </nav>
);

export default Navbar;
