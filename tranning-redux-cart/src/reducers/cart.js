import * as Types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('cart'));
var initialState = [];

const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findIndex(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    default: return [...state];
  }
};

var findIndex = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
}

export default cart;