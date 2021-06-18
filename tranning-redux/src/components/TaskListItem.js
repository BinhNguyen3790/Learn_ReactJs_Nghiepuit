import React, { Component } from 'react';

class TaskListItem extends Component {

  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{task.name}</td>
        <td className="text-center"><span className={task.status === true ? "badge badge-success" : "badge badge-danger"}>{task.status === true ? "Open" : "Close"}</span></td>
        <td>
          <div className="text-center">
            <button type="submit" className="btn btn-warning text-white mr-1" ><i className="fas fa-pen"></i> Edit</button>
            <button type="submit" className="btn btn-danger" ><i className="far fa-trash-alt"></i> Delete</button>
          </div>
        </td>
      </tr>
    )
  }
};

export default TaskListItem;