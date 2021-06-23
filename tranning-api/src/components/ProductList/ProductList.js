import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
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
              {this.props.children}
            </tbody>
          </table>
        </div>
        <div className="card-footer text-muted">
          Footer
        </div>
      </div>
    )
  }
};

export default ProductList;