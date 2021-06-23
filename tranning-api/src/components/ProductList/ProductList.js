import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

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
              <ProductItem />
              <ProductItem />
              <ProductItem />
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