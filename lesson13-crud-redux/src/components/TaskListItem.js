import React, { Component } from 'react';

class TaskListItem extends Component {
  changeStatus = () => {
    this.props.changeStatus(this.props.task.id);
  }
  deleteItem = () => {
    this.props.deleteItem(this.props.task.id);
  }
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  }
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{task.name}</td>
        <td className="text-center"><span onClick={this.changeStatus} className={task.status === true ? "badge badge-success" : "badge badge-danger"}>{task.status === true ? "Open" : "Close"}</span></td>
        <td>
          <div className="text-center">
            <button type="submit" className="btn btn-warning text-white mr-1" onClick={this.onUpdate}><i className="fas fa-pen"></i> Edit</button>
            <button type="submit" className="btn btn-danger" onClick={this.deleteItem}><i className="far fa-trash-alt"></i> Delete</button>
          </div>
        </td>
      </tr>
    )
  }
};

export default TaskListItem;