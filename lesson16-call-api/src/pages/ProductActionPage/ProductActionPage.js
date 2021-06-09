import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from './../../utils/apiCaller';

class ProductActionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSave = (e) => {
    e.preventDefault();
    var { txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    callApi('products', 'POST', {
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }).then(res => {
      history.goBack();
    })
  }

  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-12">
        <form className="form-grid" onSubmit={this.onSave}>
          <div className="form-group">
            <label htmlFor="">Name: </label>
            <input type="text" className="form-control" placeholder="" name="txtName" value={txtName} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="">Price: </label>
            <input type="number" className="form-control" placeholder="" name="txtPrice" value={txtPrice} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="">Status: </label>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" name="chkbStatus" value={chkbStatus} onChange={this.onChange} />
                Open
              </label>
            </div>
          </div>
          <Link to="/product-list" className="btn btn-danger">Back</Link>
          <button type="submit" className="btn btn-primary ml-2">Save</button>
        </form>
      </div>
    )
  }
}

export default ProductActionPage;