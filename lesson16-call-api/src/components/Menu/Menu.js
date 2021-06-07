import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Products',
    to: '/product-list',
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active' : '';
      return (
        <li className={`nav-item ${active}`}>
          <Link className="nav-link" to={to}>{label}</Link>
        </li>
      )
    }} />

  );
}

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
          {this.showMenus(menus)}
        </ul>
      </nav>
    )
  }
  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
        )
      })
    }
    return result;
  }
};

export default Menu;