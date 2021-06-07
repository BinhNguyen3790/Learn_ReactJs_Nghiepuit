import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div className="card mt-3">
        <div className="card-header bg-primary text-white text-left">List Products</div>
        <div className="card-body">
          <table className="table">
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
              {/* ProductItem */}
              {this.props.children }
            </tbody>
          </table>
        </div>
        <div className="card-footer text-muted">Footer</div>
      </div>
    )
  }
};

export default ProductList;