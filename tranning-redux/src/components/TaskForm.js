import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSaveTask, actCloseForm } from './../actions/index';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    }
  };

  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-header bg-warning text-white">
            {this.state.id ? "Edit job to do" : "Add job to do"}
            <div className="float-right">
              <a name="" id="" className="text-dark" href="!#" role="button" onClick={this.onCloseForm} >
                <i className="far fa-times-circle" ></i>
              </a>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" id="name" required value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select className="form-control" id="exampleFormControlSelect1" name="status" value={this.state.status} onChange={this.handleChange}>
                  <option value={true}>Open</option>
                  <option value={false}>Close</option>
                </select>
              </div>
              <div className="form-group text-center mb-0">
                <button type="submit" className="btn btn-success mr-1"><i className="fas fa-plus"></i> Save</button>
                <button type="button" className="btn btn-danger" onClick={this.onClear}><i className="fas fa-times"></i> Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  };
  componentWillMount() {
    var { itemEdit } = this.props;
    if (itemEdit && itemEdit.id !== null) {
      this.setState({
        id: itemEdit.id,
        name: itemEdit.name,
        status: itemEdit.status
      })
    } else {
      this.onClear();
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEdit) {
      this.setState({
        id: nextProps.itemEdit.id,
        name: nextProps.itemEdit.name,
        status: nextProps.itemEdit.status
      })
    } else {
      this.onClear();
    }
  };
  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  };
  handleChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSaveTask(this.state)
    this.onClear();
    this.props.onCloseForm();
  };
  onCloseForm = () => {
    this.props.onCloseForm();
  };
};

const mapStateToProps = state => {
  return {
    itemEdit: state.itemEditing
  }
};

const mapDispatchToProp = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actSaveTask(task))
    },
    onCloseForm: () => {
      dispatch(actCloseForm())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProp)(TaskForm);