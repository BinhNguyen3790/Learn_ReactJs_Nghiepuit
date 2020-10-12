import React, { Component } from 'react'

class TaskItem extends Component {
  render() {
    return (
      <tr>
        <th scope="row">1</th>
        <td>Jacob</td>
        <td className="text-center"><span className="badge badge-primary">Primary</span></td>
        <td>
          <div className="text-center">
            <button type="submit" className="btn btn-warning text-white mr-1"><i className="fas fa-pen"></i> Edit</button>
            <button type="submit" className="btn btn-danger"><i className="far fa-trash-alt"></i> Delete</button>
          </div>
        </td>
      </tr>
    )
  }
}

export default TaskItem
