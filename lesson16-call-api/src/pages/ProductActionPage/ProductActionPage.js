import React, { Component } from 'react';

class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-12">
        <form className="form-grid">
          <div className="form-group">
            <label htmlFor="">Name: </label>
            <input type="text" className="form-control" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Price: </label>
            <input type="number" className="form-control" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Status: </label>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                Open
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default ProductActionPage;