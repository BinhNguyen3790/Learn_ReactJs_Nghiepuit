import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div class="card mt-3">
        <div class="card-header bg-primary text-white text-left">List Products</div>
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
              {/* ProductItem */}
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </tbody>
          </table>
        </div>
        <div class="card-footer text-muted">Footer</div>
      </div>
    )
  }
};

export default ProductList;