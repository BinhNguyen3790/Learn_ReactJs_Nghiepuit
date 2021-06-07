import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    }
  };

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
    if (txtUsername === "admin" && txtPassword === '12345Admin') {
      localStorage.setItem('user', JSON.stringify({
        username: txtUsername,
        password: txtPassword
      }))
    }
  }

  render() {
    var { txtUsername, txtPassword } = this.state;
    var logUser = localStorage.getItem('user');
    var { location } = this.props;
    if (logUser !== null) {
      return <Redirect to={{
        pathname: '/products',
        state: {
          from: location
        }
      }} />
    }
    return (
      <div className="Login">
        <h1>Login Page</h1>
        <div className="row justify-content-center mt-5">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
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
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
