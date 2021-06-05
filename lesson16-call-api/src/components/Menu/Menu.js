import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="!#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">Products</a>
          </li>
        </ul>
      </nav>
    )
  }
};

export default Menu;