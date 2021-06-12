import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest } from './../../actions/index';

class ProductListPage extends Component {

  constructor(props) {   
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  onDelete = (id) => {
    var { products } = this.state;
    callApi(`products/${id}`, 'DELETE', null).then(res => {
      if (res.status === 200) {
        var index = this.findIndex(products, id);
        if (index !== -1) {
          products.splice(index, 1);
          this.setState({
            products: products
          })
        }
      }
    })
  }

  findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    })
    return result;
  }

  render() {
    var { products } = this.props;
    return (
      <div className="col-12">
        <Link to="/product/add" className="btn btn-success">Add Product</Link>
        {/* ProductList */}
        <ProductList>
          {this.showProducts(products)}
        </ProductList>
      </div>
    )
  }
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
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);