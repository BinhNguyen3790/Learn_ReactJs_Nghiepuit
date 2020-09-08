import React, { Component } from 'react'

class Result extends Component {

  setStyle() {
    return {
      color: this.props.color
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-5">
            <div className="card-header">
              Result
            </div>
            <div className="card-body">
              <p className="card-title">Color: grey - FontSize: 15px</p>
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
