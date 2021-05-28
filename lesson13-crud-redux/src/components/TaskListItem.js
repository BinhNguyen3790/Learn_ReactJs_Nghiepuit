import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskListItem extends Component {
  changeStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }
  deleteItem = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.onCloseForm();
  }
  onEditTask = () => {
    this.props.onOpenForm();
    this.props.onEditTak(this.props.task);
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
            <button type="submit" className="btn btn-warning text-white mr-1" onClick={this.onEditTask}><i className="fas fa-pen"></i> Edit</button>
            <button type="submit" className="btn btn-danger" onClick={this.deleteItem}><i className="far fa-trash-alt"></i> Delete</button>
          </div>
        </td>
      </tr>
    )
  }
};

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onEditTak: (task) => {
      dispatch(actions.editTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItem);