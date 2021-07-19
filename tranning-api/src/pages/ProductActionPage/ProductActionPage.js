import React, { Component } from 'react';
import callApi from '../../ultils/apiCaller';

class ProductActionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      txtStatus: ""
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSave = (e) => {
    e.preventDefault();
    var { txtName, txtPrice, txtStatus } = this.state;
    callApi('products', 'POST', {
      name: txtName,
      price: txtPrice,
      status: txtStatus
    }).then(res => {
      console.log(res);
    })
  }

  render() {
    var { txtName, txtPrice, txtStatus } = this.state;
    return (
      <div className="col-12">
        <div className="container">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Name Product</label>
              <input type="text" className="form-control" id="exampleInputName1" aria-describedby="textHelp" placeholder="Enter Name" name="txtName" value={txtName} onChange={this.onChange} />
              <small id="NameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPrice1">Price</label>
              <input type="number" className="form-control" id="exampleInputPrice1" placeholder="Price" name="txtPrice" value={txtPrice} onChange={this.onChange} />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" name="txtStatus" value={txtStatus} onChange={this.onChange} />
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