import React, { Component } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

export class App extends Component {
  render() {
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
                      <TaskForm />
                    <div className="col-md-7">
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary"><i className="fas fa-plus"></i> Add Job</button>
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
        
      </main>
    )
  }
}

export default App
