import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';


class App extends Component {
  render() {
    const products = [
      {
        id: 1,
        name: 'iphone12',
        price: 44000,
        img: 'img/iphone12.jpg',
        status: true
      },
      {
        id: 2,
        name: 'iphone6',
        price: 10000,
        status: true,
      },
      {
        id: 3,
        name: 'iphone10',
        price: 22000,
        status: true
      },
      {
        id: 4,
        name: 'iphone10',
        price: 22000,
        status: false
      }
    ];

    const items = products.map((item, index) => {
      if (item.status) {
        return <Product name={item.name} key={index} price={item.price} img={item.img} />
      }
    });
    return (
      <div className="main">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card-columns pt-5">
                {items}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App
