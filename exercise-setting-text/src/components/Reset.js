import React, { Component } from 'react'

class Reset extends Component {
  onResetDefault = () => {
    this.props.onSettingDefault(true);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="resetBtn mt-5">
            <button type="button" className="btn btn-success btn-lg btn-block" onClick={this.onResetDefault}>Reset Button</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Reset
