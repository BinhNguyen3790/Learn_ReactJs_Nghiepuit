import React, { Component } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: false,
      taskEdit: null,
      filter: {
        name: '',
        status: -1
      },
      search: '',
      sortBy: 'name',
      sortValue: 1
    }
  }

  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEdit !== null) {
      this.setState({
        isDisplayForm: true,
        taskEdit: null
      })

    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEdit: null
      })
    }
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  onOpenForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  findIndex = (id) => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    })
    return result;
  }

  onUpdateItem = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    let taskEdit = tasks[index];
    this.setState({
      taskEdit: taskEdit
    });
    this.onOpenForm();
  }

  onDeleteItem = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }

  onSearch = (key) => {
    this.setState({
      search: key
    })
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }

  render() {
    var { isDisplayForm, taskEdit, sortValue, sortBy } = this.state; // var tasks = this.state.tasks
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     })
    //   }
    // }
    // tasks = tasks.filter((task) => {
    //   if (filter.status === -1) {
    //     return task
    //   } else {
    //     return task.status === (filter.status === 1 ? true : false)
    //   }
    // })
    // if (search) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(search) !== -1;
    //   })
    // }
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
    var elmTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} task={taskEdit} /> : "";
    return (
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card border-0">
                <div className="card-header bg-white text-center">
                  <h2>
                    To Do List
                  </h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    {/* Task Form */}
                    {elmTaskForm}
                    <div className={isDisplayForm === true ? "col-md-7" : "col-md-12"}>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-1" onClick={this.onToggleForm}><i className="fas fa-plus"></i> Add Job</button>
                      </div>
                      {/* Control */}
                      <Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sortBy} sortValue={sortValue} />
                      <div className="row">
                        <div className="col">
                          {/* Task List */}
                          <TaskList onUpdateStatus={this.onUpdateStatus} onUpdateItem={this.onUpdateItem} onDeleteItem={this.onDeleteItem} onFilter={this.onFilter} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App