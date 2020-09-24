import React, { Component } from 'react';
import './App.css';
import Reset from './components/Reset';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "#cccccc",
      fontSize: 15
    }
  }

  onSetColor = (params) => {
    this.setState({
      color: params
    })
  }

  render() {
    return (
      <div className="main">
        <div className="container-fluid">
          <Reset />
          <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
            <SizeSetting />
          </div>
          <Result color={this.state.color} />
        </div>
      </div >
    )
  }
}


export default App;
