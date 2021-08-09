import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from "../../actions/index";

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

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        txtStatus: itemEditing.status
      })
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
    var { id, txtName, txtPrice, txtStatus } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: txtStatus
    }
    if (id) {
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }
    history.goBack();
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
              <input type="checkbox" className="form-check-input" id="exampleCheck1" name="txtStatus" value={txtStatus} onChange={this.onChange} checked={txtStatus} />
              <label className="form-check-label" htmlFor="exampleCheck1">Status Product</label>
            </div>
            <Link to="/products" className="btn btn-danger mt-2">Go Back</Link>
            <button type="submit" className="btn btn-primary  mt-2 ml-2">Submit</button>
          </form>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);