import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import { actToggleForm } from './actions/index';

export class App extends Component {

  render() {
    var { toggleForm } = this.props;
    var showForm = toggleForm ? <TaskForm /> : '';
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
                    {/* Task Form */}
                    {showForm}
                    <div className={toggleForm ? "col-md-8" : "col-md-12"}>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-1" onClick={this.onToggleForm}><i className="fas fa-plus"></i> Add Job</button>
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
  };
  onToggleForm = () => {
    this.props.isDisplayForm();
  }
}

const mapStateToProps = state => {
  return {
    toggleForm: state.isDisplayForm
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    isDisplayForm: () => {
      dispatch(actToggleForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
