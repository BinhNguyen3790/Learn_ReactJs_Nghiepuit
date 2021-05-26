import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import _ from 'lodash';
// import demo from './tranning/demo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      search: '',
      sortBy: 'name',
      sortValue: 1
    }
  }

  toggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      })
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      });
    }
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  submitForm = (data) => {
    var { tasks } = this.state;
    if (data.id === "") {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }

    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  changeStatus = (id) => {
    var { tasks } = this.state;
    // var index = this.findIndex(id);
    var index = _.findIndex(tasks, (task) => {
      return task.id === id
    })
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }

  deleteItem = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing
    });
    this.onShowForm();
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  }

  onSearch = (search) => {
    this.setState({
      search: search
    });
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  }

  render() {
    var { isDisplayForm, taskEditing, filter, search, sortBy, sortValue } = this.state;
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    //   tasks = tasks.filter((task) => {
    //     if (filter.status === -1) {
    //       return task;
    //     } else {
    //       return task.status === (filter.status === 1 ? true : false);
    //     }
    //   });
    // }

    // if (search) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(search) !== -1;
    //   })
    // }

    // tasks = _.filter(tasks, (task) => {
    //   return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    // })

    // if (sortBy === 'name') {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sortValue;
    //     else if (a.name < b.name) return -sortValue;
    //     else return 0;
    //   })
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sortValue;
    //     else if (a.status < b.status) return sortValue;
    //     else return 0;
    //   })
    // }
    var elmForm = isDisplayForm ? <TaskForm submitForm={this.submitForm} closeForm={this.onCloseForm} task={taskEditing} /> : "";
    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card border-0">
                <div className="card-header bg-white text-center">
                  <h2>To Do List</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className={isDisplayForm ? "col-md-4" : ""}>
                      {/* Task Form */}
                      {elmForm}
                    </div>
                    <div className={isDisplayForm ? "col-md-8" : "col-md-12"}>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-1" onClick={this.toggleForm}><i className="fas fa-plus"></i> Add Job</button>
                      </div>
                      {/* Control */}
                      <Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sortBy} sortValue={sortValue} />
                      <div className="row">
                        <div className="col">
                          {/* Task List */}
                          <TaskList onFilter={this.onFilter} changeStatus={this.changeStatus} deleteItem={this.deleteItem} onUpdate={this.onUpdate} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
};

export default App;
