import React, { Component } from 'react'

class Product extends Component {

  onAddToCard = () => {
    console.log(this.props.name);
  }

  render() {
    return (
      <div className="card" >
        <img className="card-img-top" src={(this.props.img) ? this.props.img : "img/not-available.jpg"} alt={this.props.name} style={{ "maxHeight": "217px" }} />
        <div className="card-body">
          <h4 className="card-title">{(this.props.name) ? this.props.name : "null"}</h4>
          <h5 className="card-title">{(this.props.price) ? this.props.price : "0"}$</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="btn btn-success" onClick={this.onAddToCard}>Buy Now</button>
        </div>
      </div>
    )
  }

}

export default Product
