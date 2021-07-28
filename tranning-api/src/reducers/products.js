import * as Types from './../constants/ActionTypes';

const initialState = [
  {
    id: 1,
    name: "Iphone 12",
    price: 400,
    status: true
  },
  {
    id: 2,
    name: "Iphone 13",
    price: 700,
    status: false
  },
  {
    id: 3,
    name: "Iphone 14",
    price: 1000,
    status: true
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.LIST_PRODUCTS:
      console.log(action);
      return [...state];
    default:
      return [...state];
  }
}

export default products;
