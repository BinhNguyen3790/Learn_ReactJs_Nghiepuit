var initialState = [
  {
    id: 1,
    name: 'Iphone 12',
    image: '',
    description: 'Make by Apple',
    price: 500,
    inventory: 10
  },
  {
    id: 2,
    name: 'Iphone XS Max',
    image: '',
    description: 'Make by Apple',
    price: 400,
    inventory: 15
  },
  {
    id: 3,
    name: 'Iphone 13',
    image: '',
    description: 'Make by Apple',
    price: 800,
    inventory: 10
  }
]

const product = (state = initialState, action) => {
  switch (action.type) {
    default: return [...state];
  }
}

export default product;