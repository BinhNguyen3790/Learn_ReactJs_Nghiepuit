import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="card-rows row pt-5">
          <div className="col-md-6">
            <Product />
          </div>
          <div className="col-md-6">
            <Product />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
