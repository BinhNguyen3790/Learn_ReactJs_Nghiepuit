import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <button type="button" class="btn btn-success">Add Product</button>
              <div class="card mt-3">
                <div class="card-header bg-primary text-white text-left">
                  List Products
                </div>
                <div class="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>13233</td>
                        <td>Iphone 12</td>
                        <td>1500</td>
                        <td>
                          <span className='badge badge-success'>Open</span>
                        </td>
                        <td>
                          <button type="button" class="btn btn-warning mr-2">Edit</button>
                          <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>13233</td>
                        <td>Iphone 12</td>
                        <td>1500</td>
                        <td>
                          <span className='badge badge-success'>Open</span>
                        </td>
                        <td>
                          <button type="button" class="btn btn-warning mr-2">Edit</button>
                          <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer text-muted">
                  Footer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
