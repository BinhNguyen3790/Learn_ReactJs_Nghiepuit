import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Add Job</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-name-input"
            label="Name"
            type="name"
            className={classes.TextField}
            margin="normal"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            className={classes.TextField}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose} color="primary">
            Disagree
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
};

export default withStyles(styles)(TaskForm);