import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">
      <h1 className="logo">Ralabsram</h1>
    </Link>
    <div className="menu">
      <Link to="menu1">menu1</Link>
      <Link to="menu2">menu2</Link>
      <Link to="menu3">menu3</Link>
      <Link to="login">Login</Link>
    </div>
  </header>
);

export default Header;
