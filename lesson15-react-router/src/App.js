import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Nav Menu */}
          <Nav />
        </div>
        <Switch>
          {/* <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} /> */}
          {this.showContentNavs(routes)}
        </Switch>
      </Router>
    )
  }
  showContentNavs = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        )
      })
    }
    return result;
  }
}

export default App;
