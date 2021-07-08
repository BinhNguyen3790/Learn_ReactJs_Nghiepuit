import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>Iphone 6</td>
        <td>500</td>
        <td>
          <span className="badge badge-warning">Open</span>
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
