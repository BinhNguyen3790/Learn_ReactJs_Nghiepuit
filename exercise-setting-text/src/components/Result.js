import React, { Component } from 'react'

class Result extends Component {

  setStyle() {
    return {
      color: this.props.color,
      fontSize: this.props.fontSize
    }
  }

  setStyleBg() {
    return {
      backgroundColor: this.props.color
    }
  }

  setStyleBd() {
    return {
      border: "1px solid " + this.props.color
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-5">
            <div className="card-header" style={this.setStyleBg()}>
              Result
            </div>
            <div className="card-body" style={this.setStyleBd()}>
              <p className="card-title">Color: {this.props.color} - FontSize: {this.props.fontSize}px</p>
              <div style={this.setStyle()}>
                Hello World!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Result
