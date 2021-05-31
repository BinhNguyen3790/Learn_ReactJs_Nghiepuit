import React, { Component } from 'react';

class TaskListItem extends Component {

  render() {
    return (
      <tr>
        <th scope="row">1</th>
        <td>Learn React</td>
        <td className="text-center"><span onClick={this.changeStatus} className="badge badge-success">Open</span></td>
        <td>
          <div className="text-center">
            <button type="submit" className="btn btn-warning text-white mr-1" onClick={this.onEditTask}><i className="fas fa-pen"></i> Edit</button>
            <button type="submit" className="btn btn-danger" onClick={this.deleteItem}><i className="far fa-trash-alt"></i> Delete</button>
          </div>
        </td>
      </tr>
    )
  }
};

export default TaskListItem;