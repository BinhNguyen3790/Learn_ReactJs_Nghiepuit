import * as Types from './../constants/ActionType';
// var data = JSON.parse(localStorage.getItem('cart'));
var initialState = [
  {
    product: {
      id: 1,
      name: "iphone 7 plus",
      image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg",
      description: "Make by Apple",
      price: 500,
      inventory: 10,
      rating: 4
    },
    quantity: 5
  },
  {
    product: {
      id: 3,
      name: "Oppo F1s",
      image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg",
      description: "Make by China",
      price: 450,
      inventory: 5,
      rating: 3
    },
    quantity: 2
  }
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return [...state];
    default: return [...state];
  }
}

export default cart;