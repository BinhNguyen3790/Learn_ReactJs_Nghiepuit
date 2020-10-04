import React, { Component } from 'react'

class ColorPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: ["#ff5252", "#6161ff", "#ffff60", "#434343", "#ffffff", "#47bf47", "#ffb42a", "#cccccc"]
    };
  }

  showColor(color) {
    return {
      background: color
    };
  }

  setActiveColor = (color) => {
    this.props.onReceiveColor(color);
  }

  render() {
    let elmColors = this.state.colors.map((color, index) => {
      return <span
        className={this.props.color === color ? 'boxColor active' : 'boxColor'}
        key={index}
        style={this.showColor(color)}
        onClick={() => this.setActiveColor(color)}
      ></span>
    })
    return (
      <div className="col-md-6">
        <div className="card mt-5">
          <div className="card-header">
            Change color text
          </div>
          <div className="card-body">
            <p className="card-title">Select color text</p>
            <div>
              {elmColors}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPicker
