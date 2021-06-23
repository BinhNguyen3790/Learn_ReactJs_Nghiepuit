import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Open" : "Close";
    var statusClass = product.status ? "badge badge-success" : "badge badge-warning";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`badge badge-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <button type="button" className="btn btn-primary mr-2">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
};

export default ProductItem;
