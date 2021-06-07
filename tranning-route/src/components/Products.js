import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
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
    var elm = products.map((product, index) => {
      return (
        <NavLink to={`${match.url}/${product.slug}`} key={index}>
          <li className='list-group-item'>
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      )
    });
    var { location } = this.props;
    console.log(location);
    return (
      <div className="Products">
        <div className='container'>
          <h1>Products Page</h1>
          <div className="row" >
            <ul className='list-group'>
              {elm}
            </ul>
          </div>
          <div className="row">
            <Route path='/products/:name' component={ProductItem} />
          </div>
        </div >
      </div>
    )
  }
}

export default Products;
