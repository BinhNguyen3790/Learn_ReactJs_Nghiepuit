import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>13233</td>
        <td>Iphone 12</td>
        <td>1500</td>
        <td>
          <span className='badge badge-success'>Open</span>
        </td>
        <td>
          <button type="button" class="btn btn-warning mr-2">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
};

export default ProductItem;