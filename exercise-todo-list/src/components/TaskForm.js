import React, { Component } from 'react'

class TaskForm extends Component {
  render() {
    return (
      <div className="col-md-5">
        <div className="card">
          <div className="card-header bg-warning text-white">
            Add job to do
            <div className="float-right">
              <a name="" id="" className="text-dark" href="!#" role="button">
                <i className="far fa-times-circle"></i>
              </a>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name"/>
              </div>
              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value={true}>Open</option>
                  <option value={false}>Close</option>
                </select>
              </div>
              <div className="form-group text-center">
                <button type="button" className="btn btn-success mr-1"><i className="fas fa-plus"></i> Save</button>
                <button type="button" className="btn btn-danger"><i className="fas fa-times"></i> Close</button>
              </div>
            </form>
          </div>
        </div>
    </div>
    )
  }
}

export default TaskForm
