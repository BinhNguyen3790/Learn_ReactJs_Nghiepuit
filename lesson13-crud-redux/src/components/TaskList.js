import React, { Component } from 'react';
import TaskListItem from '../components/TaskListItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    var filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    }
    this.props.onFilterTable(filter)
    this.setState({
      [name]: value
    });
  }

  render() {
    var { tasks, filterTable } = this.props;

    // Filter on Table
    if (filterTable.name) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
      });
    }
    tasks = tasks.filter((task) => {
      if (filterTable.status === -1) {
        return task;
      } else {
        return task.status === (filterTable.status === 1 ? true : false);
      }
    });


    var { filterName, filterStatus } = this.state;
    var elmItem = tasks.map((task, index) => {
      return <TaskListItem key={index} index={index} task={task} />
    })
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
              <input type="text" className="form-control" id="exampleFormControlInput1" name="filterName" value={filterName} onChange={this.onChange} />
            </td>
            <td>
              <select className="form-control" id="exampleFormControlSelect1" name="filterStatus" value={filterStatus} onChange={this.onChange}>
                <option value={-1}>All</option>
                <option value={0}>Close</option>
                <option value={1}>Open</option>
              </select>
            </td>
            <td></td>
          </tr>
          {/* Task Item */}
          {elmItem}
        </tbody>
      </table>
    )
  }
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(actions.filterTask(filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);