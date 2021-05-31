import React, { Component } from 'react';
import TaskListItem from '../components/TaskListItem';

class TaskList extends Component {

  render() {
    return (
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="filterName" />
            </td>
            <td>
              <select className="form-control" id="exampleFormControlSelect1" name="filterStatus">
                <option value={-1}>All</option>
                <option value={0}>Close</option>
                <option value={1}>Open</option>
              </select>
            </td>
            <td></td>
          </tr>
          {/* Task Item */}
          <TaskListItem />
        </tbody>
      </table>
    )
  }
};

export default TaskList;