import React, { Component } from 'react'

class SizeSetting extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="card mt-5">
          <div className="card-header">
            Change size text
          </div>
          <div className="card-body">
            <p className="card-title">Click the button to change size text up or down</p>
            <div className="groupBtn">
              <button type="submit" className="btn btn-primary mr-2">Submit</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SizeSetting
