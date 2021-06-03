import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onLogin = (e) => {
    e.preventDefault();
    var { txtUsername, txtPassword } = this.state;
    if (txtUsername === 'admin' && txtPassword === 'admin123Badmin') {
      localStorage.setItem('user', JSON.stringify({
        username: txtUsername,
        password: txtPassword
      }))
    }
  }

  render() {
    var { txtUsername, txtPassword } = this.state;
    var logInUser = localStorage.getItem('user');
    if (logInUser !== null) {
      var { location } = this.props;
      return <Redirect to={{
        pathname: '/products',
        state: {
          from: location
        }
      }} />
    }
    return (
      <div className="row">
        <div className="col-6">
          <form action="" onSubmit={this.onLogin}>
            <legend>Login</legend>
            <div className="form-group">
              <label>Username: </label>
              <input type="text" className="form-control" name="txtUsername" value={txtUsername} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input type="password" className="form-control" name="txtPassword" value={txtPassword} onChange={this.onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    )
  }
};

export default Login;