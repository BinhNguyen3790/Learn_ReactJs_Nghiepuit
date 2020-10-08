import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      description: "",
      gender: 0,
      language: "c",
      single: false
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <main>
        <div className="container">
          <div className="row mt-5">
            <div className="col-8">
              <div className="card">
                <div className="card-header">
                  Header
                </div>
                <div className="card-body">
                  <h4 className="card-title">Sign Up</h4>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="userName">Email address</label>
                      <input
                        type="text"
                        name="userName"
                        className="form-control"
                        id="userName"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                        value={this.state.userName}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="userName">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        onChange={this.handleChange}
                        value={this.state.password}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="userName">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows="3"
                        onChange={this.handleChange}
                        value={this.state.description}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="userName">Gender</label>
                      <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange}>
                        <option value={0}>Nữ</option>
                        <option value={1}>Nam</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="userName">Language</label>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="language" value="js" onChange={this.handleChange} checked={this.state.language === "js"} />
                          JavaScript
                        </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="language" value="c" onChange={this.handleChange} checked={this.state.language === "c"} />
                          C#
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="userName">Status</label>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" name="single" value={true} onChange={this.handleChange} checked={this.state.single === true} />
                          Single
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mr-1">Submit</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                  </form>
                </div>
                <div className="card-footer text-muted">
                  Footer
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App
