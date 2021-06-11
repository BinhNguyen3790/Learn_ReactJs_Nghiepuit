var initialState = [
  {
    id: 1,
    name: "iphone 7 plus",
    image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg",
    description: "Make by Apple",
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: "samsung galaxy",
    image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg",
    description: "Make by Samsung",
    price: 400,
    inventory: 15,
    rating: 5
  },
  {
    id: 3,
    name: "Oppo F1s",
    image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg",
    description: "Make by China",
    price: 450,
    inventory: 5,
    rating: 3
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default: return [...state];
  }
}

export default products;