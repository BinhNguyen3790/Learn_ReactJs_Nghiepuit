import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs bg-dark mb-5" id="navId">
          <li className="nav-item">
            <a href="#tab1Id" className="nav-link active">Active</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="!#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#tab2Id">Action</a>
              <a className="dropdown-item" href="#tab3Id">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#tab4Id">Action</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#tab5Id" className="nav-link">Another link</a>
          </li>
          <li className="nav-item">
            <a href="!#" className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
          <div className="tab-pane fade" id="tab2Id" role="tabpanel"></div>
          <div className="tab-pane fade" id="tab3Id" role="tabpanel"></div>
          <div className="tab-pane fade" id="tab4Id" role="tabpanel"></div>
          <div className="tab-pane fade" id="tab5Id" role="tabpanel"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-primary mb-2">Add Product</button>
              <div className="card">
                <div className="card-header">
                  Products List
                </div>
                <div className="card-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Iphone 6</td>
                        <td>500</td>
                        <td>
                          <span className="badge badge-warning">Open</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-primary mr-2">Edit</button>
                          <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer text-muted">
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