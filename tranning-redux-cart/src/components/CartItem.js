import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return (
      <tr>
        <th scope="row">
          <img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg" alt="Iphone 12" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>Iphone 12</strong>
          </h5>
        </td>
        <td>1200$</td>
        <td className="center-on-small-only">
          <span className="qty">2  </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a href="!#">—</a>
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a href="!#">+</a>
            </label>
          </div>
        </td>
        <td>1500$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item">X</button>
        </td>
      </tr>
    )
  }
};

export default CartItem;