import React, { Component } from 'react';

class CartResult extends Component {
  render() {
    var { cart } = this.props;
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.sumOf(cart)}$</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase <i className="fa fa-angle-right right"></i></button>
        </td>
      </tr>
    )
  };
  sumOf = (cart) => {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
      sum += cart[i].product.price * cart[i].quantity;
    }
    return sum;
  }
};

export default CartResult;