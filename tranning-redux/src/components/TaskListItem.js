import React, { Component } from 'react';

class TaskListItem extends Component {

  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{task.name}</td>
        <td className="text-center"><span onClick={() => this.ChangeStatus(task.id)} className={task.status === true ? "badge badge-success" : "badge badge-danger"}>{task.status === true ? "Open" : "Close"}</span></td>
        <td>
          <div className="text-center">
            <button type="button" className="btn btn-warning text-white mr-1" onClick={() => this.onEditTask(task)}><i className="fas fa-pen"></i> Edit</button>
            <button type="button" className="btn btn-danger" onClick={() => this.onDeleteTask(task.id)}><i className="far fa-trash-alt"></i> Delete</button>
          </div>
        </td>
      </tr>
    )
  };
  ChangeStatus = (id) => {
    this.props.onChangeStatus(id);
  };
  onDeleteTask = (id) => {
    this.props.onDeleteTask(id);
    this.props.onCloseForm();
  };
  onEditTask = (task) => {
    this.props.onOpenForm();
    this.props.onEditTask(task);
  }
};

export default TaskListItem;