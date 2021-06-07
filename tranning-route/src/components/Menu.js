import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true
  },
  {
    name: 'About',
    to: '/about',
    exact: false
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: false
  },
  {
    name: 'Products',
    to: '/products',
    exact: false
  },
  {
    name: 'Login',
    to: '/login',
    exact: false
  }
]

const NavLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active aa' : '';
      return (
        <li className={`nav-item ${active}`}>
          <Link to={to} className="nav-link">{label}</Link>
        </li>
      )
    }} />
  )
}

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <ul className="nav navbar-nav">
          {this.ShowMenus(menus)}
        </ul>
      </nav>
    )
  }
  ShowMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <NavLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
        )
      });
    }
    return result;
  }
}

export default Menu;
