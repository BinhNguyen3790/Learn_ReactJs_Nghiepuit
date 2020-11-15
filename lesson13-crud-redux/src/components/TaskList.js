import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1  //all: -1, activate: 1, deactivate: 0
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value
    })
  }

  render() {
    console.log(this.props.todos);
    var { tasks } = this.props; // var tasks  = this.props.tasks
    var { filterName, filterStatus } = this.state;
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem task={task} index={index} key={task.id} onUpdateStatus={this.props.onUpdateStatus} onUpdateItem={this.props.onUpdateItem} onDeleteItem={this.props.onDeleteItem} />
    })

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
          {elmTasks}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, null)(TaskList);
