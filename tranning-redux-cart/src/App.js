import React, { Component } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hidden-sn animated deep-purple-skin">
          {/* <!-- Header --> */}
          <Header />
          <main id="mainContainer">
            <div className="container">
              {/* <!-- Products --> */}
              <Products />
              {/* <!-- Message --> */}
              <Message />
              {/* <!-- Cart --> */}
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
