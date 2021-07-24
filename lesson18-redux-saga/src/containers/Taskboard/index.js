import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../action/task";
import PropTypes from "prop-types";
import SearchBox from "../../components/SearchBox";

class TaskBoard extends Component {
  state = {
    open: false,
  };

  // componentDidMount() {
  //   const { taskActionCreators } = this.props;
  //   const { fetchListTask } = taskActionCreators;
  //   fetchListTask();
  // }

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList key={status.value} tasks={taskFiltered} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  // showToast = () => {
  //   toast.error("Success!");
  // };

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  };

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  renderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: 20 }}
          onClick={this.loadData}
        >
          Load Data
        </Button>
        <Button variant="contained" color="primary" onClick={this.openForm}>
          <AddIcon /> Add Job
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
