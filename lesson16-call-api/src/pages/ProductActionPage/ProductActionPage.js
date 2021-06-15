import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from './../../utils/apiCaller';
import { actAddProductRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: false
    }
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      callApi(`products/${id}`, "GET", null).then(res => {
        var data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status
        })
      });
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
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    };
    if (id) {
      callApi(`products/${id}`, 'PUT', {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(res => {
        history.goBack();
      })
    } else {
      this.props.onAddProduct(product);
      history.goBack();
    }
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
                <input type="checkbox" className="form-check-input" name="chkbStatus" value={chkbStatus} onChange={this.onChange} checked={chkbStatus} />
                Open
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mr-2">Save</button>
          <Link to="/product-list" className="btn btn-danger">Back</Link>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, action) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductActionPage);