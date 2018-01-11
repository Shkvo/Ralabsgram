import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from  './Header';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
