import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    }
  }

  componentDidMount() {
    if (this.props.itemEditing && this.props.itemEditing.id !== null) {
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status
      })
    } else if (!nextProps.itemEditing) {
      this.clearForm();
    }
  }

  closeForm = () => {
    this.props.onCloseForm();
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    });
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveTask(this.state);
    this.clearForm();
    this.closeForm();
  }
 
  clearForm = () => {
    this.setState({
      name: "",
      status: true
    });
  }

  render() {
    if (!this.props.isDisplayForm) return null;
    return (
      <div className="card">
        <div className="card-header bg-warning text-white">
          {this.state.id !== "" ? "Edit job" : "Add job to do"}
          <div className="float-right">
            <a name="" id="" className="text-dark" href="!#" role="button" >
              <i className="far fa-times-circle" onClick={this.closeForm}></i>
            </a>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={this.formSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" name="name" id="name" required value={this.state.name} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <select className="form-control" id="exampleFormControlSelect1" name="status" value={this.state.status} onChange={this.onChange}>
                <option value={true}>Open</option>
                <option value={false}>Close</option>
              </select>
            </div>
            <div className="form-group text-center mb-0">
              <button type="submit" className="btn btn-success mr-1"><i className="fas fa-plus"></i> Save</button>
              <button type="button" className="btn btn-danger" onClick={this.clearForm}><i className="fas fa-times"></i> Clear</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);