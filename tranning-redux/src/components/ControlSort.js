import React, { Component } from 'react';

class ControlSort extends Component {

  render() {
    var { showSort } = this.props;
    return (
      <div className="col-4">
        <div className="form-group">
          <div className="nav-item dropdown">
            <button className="btn btn-primary" data-toggle="dropdown" href="!#" aria-expanded="false">
              Sort <i className="fas fa-sort"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="!#" className="dropdown-item" onClick={() => this.onClick("name", 1)}>
                <i className="fas fa-sort-alpha-down"></i> Name A-Z {showSort.by === "name" && showSort.value === 1 ? <i className="fas fa-check"></i> : ""}
              </a>
              <a href="!#" className="dropdown-item" onClick={() => this.onClick("name", -1)}>
                <i className="fas fa-sort-alpha-down-alt"></i> Name Z-A {showSort.by === "name" && showSort.value === -1 ? <i className="fas fa-check"></i> : ""}
              </a>
              <div className="dropdown-divider"></div>
              <a href="!#" className="dropdown-item" onClick={() => this.onClick("status", 1)}>
                <i className="fas fa-unlock-alt"></i> Status Open  {showSort.by === "status" && showSort.value === 1 ? <i className="fas fa-check"></i> : ""}
              </a>
              <a href="!#" className="dropdown-item" onClick={() => this.onClick("status", -1)}>
                <i className="fas fa-lock"></i> Status Close  {showSort.by === "status" && showSort.value === -1 ? <i className="fas fa-check"></i> : ""}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  };
  onClick = (by, value) => {
    this.props.onSort({
      by: by,
      value: value
    });
  }
};

export default ControlSort;