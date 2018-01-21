import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
  
const Header = (props) => (
  <header>
    <Link to="/">
      <h1 className="logo">Ralabsram</h1>
    </Link>
    <div className="menu">
      <Link to="menu1">menu1</Link>
      <Link to="menu2">menu2</Link>
      <Link to="menu3">menu3</Link>
      <span onClick={props.login}>Login</span>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  login(){
    dispatch({ type: "LOGING" });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
