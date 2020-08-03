import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src="img/iphone12.jpg" alt="CardImg" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/product" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default Product
