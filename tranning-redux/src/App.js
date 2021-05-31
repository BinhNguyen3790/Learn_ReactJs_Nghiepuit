import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css';

export class App extends Component {

  render() {

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
                    <div className="col-md-4">
                      {/* Task Form */}
                      <TaskForm />
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-1" onClick={this.toggleForm}><i className="fas fa-plus"></i> Add Job</button>
                      </div>
                      {/* Control */}
                      <Control />
                      <div className="row">
                        <div className="col">
                          {/* Task List */}
                          <TaskList />
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
    )
  }
}

export default App
