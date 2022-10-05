import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

import '../styles/Header.css';

function Header() {
  const name = localStorage.getItem('username');
  return (
    <header className="header" data-testid="header-component">
      <nav className="nav-links">
        <Link to="/">
          <div>
            <img className="logo" src={ logo } alt="trybetunes logo" />
          </div>
        </Link>
        <div className="links">
          <Link to="/search" data-testid="link-to-search">
            Search
          </Link>
          <Link to="/favorites" data-testid="link-to-favorites">
            Favorites
          </Link>
          <Link to="/profile" data-testid="link-to-profile">
            Profile
          </Link>
        </div>
        <div>
          <p data-testid="header-user-name">{name}</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
