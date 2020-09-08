import React, { Component } from 'react'

class Result extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-5">
            <div className="card-header">
              Result
            </div>
            <div className="card-body">
              <p className="card-title">Color: red - FontSize: 15px</p>
              <div>
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
