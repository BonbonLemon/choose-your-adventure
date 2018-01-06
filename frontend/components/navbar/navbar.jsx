import React from 'react';
import { Link } from 'react-router-dom';

const loginButton = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
)

const logoutButton = () => (
  <nav className="login-signup">
    <button className="header-button" onClick={logout}>Log Out</button>
  </nav>
)

const Navbar = ({ currentUser, logout }) => (
  currentUser ? logoutButton() : loginButton(currentUser, logout)
);

export default Navbar;
