import React, { Component } from 'react';
import TaskListItem from '../components/TaskListItem';
import { connect } from 'react-redux';
import { actChangeStatus, actDeleteTask } from '../actions';

class TaskList extends Component {

  render() {
    var { tasks } = this.props;
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
          {this.showTaskItem(tasks)}
        </tbody>
      </table>
    )
  };
  showTaskItem = (tasks) => {
    var result = null;
    var { onChangeStatus, onDeleteTask } = this.props;
    if (tasks.length > 0) {
      result = tasks.map((task, index) => {
        return (
          <TaskListItem task={task} key={index} index={index + 1} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
        )
      })
    }
    return result;
  }
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProp = (dispatch, props) => {
  return {
    onChangeStatus: (id) => {
      dispatch(actChangeStatus(id))
    },
    onDeleteTask: (id) => {
      dispatch(actDeleteTask(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(TaskList);