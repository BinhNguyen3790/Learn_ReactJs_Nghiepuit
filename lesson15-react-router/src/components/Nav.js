import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const navs = [
  {
    name: 'Home',
    to: '/',
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

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active' : '';
      return (
        <li className={`nav-item ${active}`}>
          <Link to={to} className="nav-link">{label}</Link>
        </li>
      )
    }} />
  )
}

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="!#">Navbar</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {this.showMenu(navs)}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="!#" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="!#">Action 1</a>
                <a className="dropdown-item" href="!#">Action 2</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
  showMenu = (navs) => {
    var result = null;
    if (navs.length > 0) {
      result = navs.map((nav, index) => {
        return (
          <MenuLink key={index} label={nav.name} to={nav.to} activeOnlyWhenExact={nav.exact} />
        )
      })
    }
    return result;
  }
};

export default Nav;