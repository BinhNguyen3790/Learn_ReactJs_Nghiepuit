import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

class Taskboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.boxTask}>
          <div className={classes.boxTask__item}><div className={classes.title}><h2>React Js</h2></div></div>
          <div className={classes.boxTask__item}><div className={classes.title}><h2>Angular Js</h2></div></div>
          <div className={classes.boxTask__item}><div className={classes.title}><h2>Vue Js</h2></div></div>
        </div>
      </div>
    )
  }
};

export default withStyles(styles)(Taskboard);