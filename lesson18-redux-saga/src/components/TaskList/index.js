import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import styles from "./styles";
import TaskItem from "./../TaskItem/index";

class TaskList extends Component {
  render() {
    let { classes, tasks, status } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={2} mb={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => {
            return <TaskItem task={task} status={status} key={task.id} />;
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
