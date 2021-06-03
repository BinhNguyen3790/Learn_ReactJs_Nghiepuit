import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    var { match } = this.props;
    var name = match.params.name;
    return (
      <div>
        ProductItem Page: {name}
      </div>
    )
  }
};

export default ProductItem;