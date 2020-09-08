import React, { Component } from 'react';
import './App.css';
import Reset from './components/Reset';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';


class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="container-fluid">
          <Reset />
          <div className="row">
            <ColorPicker />
            <SizeSetting />
          </div>
          <Result />
        </div>
      </div >
    )
  }
}


export default App;
