import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';


class App extends Component {
  constructor(props) {
    super(props);
    this.refName = React.createRef();
  }

  addProduct = (e) => {
    e.preventDefault()
    console.log(this.name);
  }

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
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title">Add More Product</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="nameProduct">Name Product</label>
                  <input ref={this.refName} type="text" className="form-control" id="nameProduct" aria-describedby="emailHelp" placeholder="Enter name" />
                  <small id="emailHelp" className="form-text text-muted">Enter your name product.</small>
                </div>
                {/* <div className="form-group">
                  <label for="priceProduct">Price Product</label>
                  <input type="text" className="form-control" id="priceProduct" placeholder="Enter price" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="status" />
                  <label className="form-check-label" for="status">Publish</label>
                </div> */}
                <button type="submit" className="btn btn-primary" onClick={this.addProduct}>Submit</button>
              </form>
            </div>
          </div>
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
