import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';
class ProductListPage extends Component {

  componentDidMount() {
    this.props.fetchAllProducts();
  };

  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  }

  render() {
    var { products } = this.props;
    return (
      <div className="col-12">
        <Link to="/product/add" className="btn btn-primary mb-2">Add Product</Link>
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
          <ProductItem key={index} product={product} index={index} onDelete={this.onDelete} />
        )
      })
    }
    return result;
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
