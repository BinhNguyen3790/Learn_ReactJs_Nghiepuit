import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';

class ProductListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    callApi('products', 'GET', null).then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  render() {
    var { products } = this.state;
    return (
      <div className="col-12">
        <button type="button" className="btn btn-success">Add Product</button>
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
          <ProductItem key={index} product={product} index={index} />
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

export default connect(mapStateToProps, null)(ProductListPage);