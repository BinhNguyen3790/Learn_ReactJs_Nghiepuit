import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { ThemeProvider } from '@material-ui/styles';
import TaskBoard from './../TaskBoard/index';
import theme from '../../commons/Theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
        <div className="App">
          {/* <h1>Hello redux saga</h1>
          <Button variant="contained" color="primary">Hello</Button>
          <div className={classes.boxFlex}>
            <div className={classes.boxFlex__item}><div className={classes.title}><h2>React Js</h2></div></div>
            <div className={classes.boxFlex__item}><div className={classes.title}><h2>Angular Js</h2></div></div>
            <div className={classes.boxFlex__item}><div className={classes.title}><h2>Vue Js</h2></div></div>
          </div> */}
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
