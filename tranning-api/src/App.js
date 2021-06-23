import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-primary mb-2">Add Product</button>
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;