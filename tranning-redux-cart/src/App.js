import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hidden-sn animated deep-purple-skin">
          {/* <!-- Header --> */}
          <Header />
          <main id="mainContainer">
            <div className="container">
              {/* <!-- ProductsContainer --> */}
              <ProductsContainer />
              {/* <!-- Message --> */}
              <Message />
              {/* <!-- CartContainer --> */}
              <Cart />
            </div>
          </main>
          {/* <!-- Footer --> */}
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
