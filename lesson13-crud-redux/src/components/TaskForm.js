import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false
    }
  }

  componentDidMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      })
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
        id: '',
        name: '',
        status: false
      })
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    if (name === 'status') {
      value = target.value;
    }
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTask(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }

  render() {
    let { id } = this.state;
    return (
      <div className="col-md-5">
        <div className="card">
          <div className="card-header bg-warning text-white">
            {id !== '' ? 'Edit job to do' : 'Add job to do'}
            <div className="float-right">
              <a name="" id="" className="text-dark" href="!#" role="button" onClick={this.onCloseForm}>
                <i className="far fa-times-circle"></i>
              </a>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" id="name" value={this.state.name} onChange={this.onChange} required />
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
                <button type="button" className="btn btn-danger" onClick={this.onClear}><i className="fas fa-times"></i> Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
