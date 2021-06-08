var initialState = [
  {
    id: 1,
    name: 'Iphone 12',
    price: 400,
    status: true
  },
  {
    id: 2,
    name: 'Samsung Galaxy',
    price: 700,
    status: false
  },
  {
    id: 1,
    name: 'Oppo F1S',
    price: 300,
    status: true
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default: return [...state];
  }
};

export default products;
