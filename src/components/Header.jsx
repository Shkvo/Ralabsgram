import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <header>
    <Link to="/">
      <h1 className="logo">Ram</h1>
    </Link>
    <div className="menu">
      <Link to="menu1">menu1</Link>
      <Link to="menu2">menu2</Link>
      <Link to="menu3">menu3</Link>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  //
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
