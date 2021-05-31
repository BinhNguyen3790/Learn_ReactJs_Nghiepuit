import React, { Component } from 'react';

class TaskForm extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-header bg-warning text-white">
          Add job to do
          <div className="float-right">
            <a name="" id="" className="text-dark" href="#" role="button" >
              <i className="far fa-times-circle" onClick={this.closeForm}></i>
            </a>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={this.formSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" name="name" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <select className="form-control" id="exampleFormControlSelect1" name="status">
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

export default TaskForm;