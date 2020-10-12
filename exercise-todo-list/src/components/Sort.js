import React, { Component } from 'react'

class Sort extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="form-group">
          <div className="nav-item dropdown">
            <button className="btn btn-primary" data-toggle="dropdown" href="!#" aria-expanded="false">
              Sort <i className="fas fa-sort"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="!#" className="dropdown-item">
                <i className="fas fa-sort-alpha-down"></i> Name A-Z <i className="fas fa-check"></i>
              </a>
              <a href="!#" className="dropdown-item">
                <i className="fas fa-sort-alpha-down-alt"></i> Name Z-A 
              </a>
              <div className="dropdown-divider"></div>
              <a href="!#" className="dropdown-item">
                <i className="fas fa-unlock-alt"></i> Status Open
              </a>
              <a href="!#" className="dropdown-item">
                <i className="fas fa-lock"></i> Status Close
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sort
