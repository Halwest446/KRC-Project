import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/images/logo.png" alt="Kurdistan Rehab Center Logo" className="logo-image" />
          Kurdistan Rehab Center
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/media" className="nav-link">Media</Link>
          </li>
          <li className="nav-item">
            <Link to="/doctors" className="nav-link">Doctors</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;