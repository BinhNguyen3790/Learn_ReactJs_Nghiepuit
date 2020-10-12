import React, { Component } from 'react';
import TaskItem from './TaskItem';  

class TaskList extends Component {
  render() {
    return (
      <table className="table table-hover">
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
              <input type="text" className="form-control" id="exampleFormControlInput1"/>
            </td>
            <td>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </td>
            <td></td>
          </tr>
          {/* Task Item */}
          <TaskItem />
        </tbody>
      </table>
    )
  }
}

export default TaskList
