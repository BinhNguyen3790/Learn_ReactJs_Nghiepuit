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
      fontSize: 16
    }
  }

  onSetColor = (params) => {
    this.setState({
      color: params
    })
  }

  onChangeSize = (value) => {
    this.setState({
      fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
    })
  }

  onSettingDefault = (value) => {
    if (value) {
      this.setState({
        color: "#cccccc",
        fontSize: 16
      })
    }
  }

  render() {
    return (
      <div className="main">
        <div className="container-fluid">
          <Reset onSettingDefault={this.onSettingDefault} />
          <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div >
    )
  }
}


export default App;
