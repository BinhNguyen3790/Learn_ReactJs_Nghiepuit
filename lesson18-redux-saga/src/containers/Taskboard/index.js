import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material-ui book",
    status: 0,
  },
  {
    id: 2,
    title: "Play Football",
    description: "With my friend",
    status: 1,
  },
  {
    id: 3,
    title: "Play game",
    description: "",
    status: 2,
  },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value,
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
  render() {
    const { classes } = this.props;
    var test = null;
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" onClick={this.openForm}>
          <AddIcon /> Add Job
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);
