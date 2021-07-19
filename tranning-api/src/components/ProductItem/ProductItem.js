import React, { Component } from 'react';

class ProductItem extends Component {

  onDelete = (id) => {
    if (confirm("are you want to delete this product?")) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }

  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Open" : "Close";
    var statusClass = product.status ? "success" : "warning";
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
          <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Delete</button>
        </td>
      </tr>
    )
  }
};

export default ProductItem;
