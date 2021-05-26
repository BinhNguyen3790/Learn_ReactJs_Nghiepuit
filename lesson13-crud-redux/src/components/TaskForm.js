import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true,
    }
  }

  componentDidMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      })
    } else if (!nextProps.task) {
      this.setState({
        id: "",
        name: "",
        status: false
      })
    }
  }

  closeForm = () => {
    this.props.closeForm();
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    });
  }

  formSubmit = (e) => {
    e.preventDefault();
    // this.props.submitForm(this.state);
    this.props.onAddTask(this.state);
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
    var { id } = this.state;
    return (
      <div className="card">
        <div className="card-header bg-warning text-white">
          {id !== "" ? "Edit job" : "Add job to do"}
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

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);