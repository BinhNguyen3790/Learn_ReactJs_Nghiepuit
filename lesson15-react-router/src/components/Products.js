import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ProductItem from './ProductItem';

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: '12',
        name: 'Iphone 12',
        price: 1500
      },
      {
        id: 2,
        slug: '13',
        name: 'Iphone 13',
        price: 2000
      },
      {
        id: 3,
        slug: '11',
        name: 'Iphone 11',
        price: 1000
      }
    ];

    var { match } = this.props;
    var url = match.url;
    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index} >
          <li className='list-group-item'>
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink >
      )
    })
    var { location } = this.props;
    console.log(location);
    return (
      <div className='container' >
        Products Page
        <div className="row" >
          <ul className='list-group'>
            {result}
          </ul>
        </div>
        <div className="row">
          <Route path='/products/:name' component={ProductItem} />
        </div>
      </div >
    )
  }
};

export default Products;