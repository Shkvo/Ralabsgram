import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        
        <Link to="/">
          <h1 className='logo'>Ralabsram</h1>
        </Link>

        <div className='menu'>
          <Link to='menu1'>menu1</Link>
          <Link to='menu2'>menu2</Link>
          <Link to='menu3'>menu3</Link>
          <Link to='login'>Login</Link>
        </div>

      </header>
    );
  }
}

export default Header;
