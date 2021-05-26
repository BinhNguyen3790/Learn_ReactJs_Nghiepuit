import React, { Component } from 'react'

class TaskItem extends Component {

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }

  onDeleteItem = () => {
    this.props.onDeleteItem(this.props.task.id);
  }

  onUpdateItem = () => {
    this.props.onUpdateItem(this.props.task.id);
  }

  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{task.name}</td>
        <td className="text-center"><span onClick={this.onUpdateStatus} className={task.status === true ? "badge badge-success" : "badge badge-danger"}>{task.status === true ? "Open" : "Close"}</span></td>
        <td>
          <div className="text-center">
            <button type="submit" className="btn btn-warning text-white mr-1" onClick={this.onUpdateItem}><i className="fas fa-pen"></i> Edit</button>
            <button type="submit" className="btn btn-danger" onClick={this.onDeleteItem}><i className="far fa-trash-alt"></i> Delete</button>
          </div>
        </td>
      </tr>
    )
  }
}

export default TaskItem
