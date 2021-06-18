import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Message from './../constants/Message';
import Cart from '../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from '../components/CartResult';
import PropTypes from 'prop-types';
import { actChangeMessage, actDeleteProductInCart, actUpdateProductInCart } from '../actions';

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCart(cart)}
        {this.showResult(cart)}
      </Cart>
    )
  };
  showCart = (cart) => {
    var { onDeleteCart, onChangeMessage, onUpdateProductInCart } = this.props;
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem key={index} item={item} index={index} onDeleteCart={onDeleteCart} onChangeMessage={onChangeMessage} onUpdateProductInCart={onUpdateProductInCart} />
        )
      })
    }
    return result;
  };
  showResult = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />
    }
    return result;
  }
};

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onDeleteCart: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteCart: (product) => {
      dispatch(actDeleteProductInCart(product))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);