import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class ControlSort extends Component {

  onClick = (sortBy, sortValue) => {
    this.props.onSort({
      by: sortBy,
      value: sortValue
    });
  }

  render() {
    return (
      <div className="col-4">
        <div className="form-group">
          <div className="nav-item dropdown">
            <button className="btn btn-primary" data-toggle="dropdown" href="!#" aria-expanded="false">
              Sort <i className="fas fa-sort"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item" onClick={() => this.onClick("name", 1)}>
                <i className="fas fa-sort-alpha-down"></i> Name A-Z {(this.props.sort.by === "name" && this.props.sort.value === 1) ? <i className="fas fa-check"></i> : ""}
              </a>
              <a href="#" className="dropdown-item" onClick={() => this.onClick("name", -1)}>
                <i className="fas fa-sort-alpha-down-alt"></i> Name Z-A {(this.props.sort.by === "name" && this.props.sort.value === -1) ? <i className="fas fa-check"></i> : ""}
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item" onClick={() => this.onClick("status", 1)}>
                <i className="fas fa-unlock-alt"></i> Status Open {(this.props.sort.by === "status" && this.props.sort.value === 1) ? <i className="fas fa-check"></i> : ""}
              </a>
              <a href="#" className="dropdown-item" onClick={() => this.onClick("status", -1)}>
                <i className="fas fa-lock"></i> Status Close {(this.props.sort.by === "status" && this.props.sort.value === -1) ? <i className="fas fa-check"></i> : ""}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    sort: state.sort
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => {
      dispatch(actions.sortTask(sort));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlSort);