import React, { Component } from 'react';

class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="container">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Name Product</label>
              <input type="text" className="form-control" id="exampleInputName1" aria-describedby="textHelp" placeholder="Enter Name" />
              <small id="NameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPrice1">Price</label>
              <input type="number" className="form-control" id="exampleInputPrice1" placeholder="Price" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Status Product</label>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
          </form>
        </div>
      </div>
    )
  }
};

export default ProductActionPage;