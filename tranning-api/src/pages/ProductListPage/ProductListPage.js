import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';

class ProductListPage extends Component {
  render() {
    var products = [];
    return (
      <div className="col-12">
        <button type="button" className="btn btn-primary mb-2">Add Product</button>
        <ProductList>
          {this.showProducts(products)}
        </ProductList>
      </div>
    )
  };
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem key={index} product={product} index={index} />
        )
      })
    }
    return result;
  }
};

export default ProductListPage;
