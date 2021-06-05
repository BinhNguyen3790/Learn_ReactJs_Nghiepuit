import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="nav navbar-nav">
              <NavLink label="Home" to="/" activeOnlyWhenExact={true} />
              <NavLink label="About" to="/about" activeOnlyWhenExact={false} />
              <NavLink label="Contact" to="/contact" activeOnlyWhenExact={false} />
            </ul>
          </nav>
          {/* Nội dung */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
