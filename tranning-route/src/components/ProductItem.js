import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    var { match } = this.props;
    var name = match.params.name;
    return (
      <div className="ProductItem">
        <h1>ProductItem Page {name}</h1>
      </div>
    )
  }
}

export default ProductItem;
