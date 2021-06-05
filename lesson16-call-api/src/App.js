import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Menu */}
        <Menu />
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <button type="button" class="btn btn-success">Add Product</button>
              {/* ProductList */}
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
