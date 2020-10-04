import React, { Component } from 'react'

class SizeSetting extends Component {

  changeSize(value) {
    this.props.onChangeSize(value);
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="card mt-5">
          <div className="card-header">
            Change size text
          </div>
          <div className="card-body">
            <p className="card-title">Font size of text: {this.props.fontSize}px</p>
            <div className="groupBtn">
              <button type="button" className="btn btn-warning mr-2" onClick={() => this.changeSize(-2)}>Reduction</button>
              <button type="button" className="btn btn-primary" onClick={() => this.changeSize(2)}>Increase</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SizeSetting
