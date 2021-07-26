import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Box, Grid, Modal } from "@material-ui/core";
import PropTypes from "prop-types";

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.modal}>
          <form>
            <Grid container>
              <Grid item md={12}>
                <TextField
                  id="standard-name-input"
                  label="Title"
                  type="name"
                  className={classes.TextField}
                  margin="normal"
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Description"
                  multiline
                  rowsMax={4}
                  className={classes.TextField}
                  margin="normal"
                />
              </Grid>
              <Grid item md={12}>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                  <Button variant="contained" onClick={onClose}>
                    Cancel
                  </Button>
                  <Box mr={1}>
                    <Button variant="contained" color="primary">
                      Save
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    );
  }
}

TaskForm.propTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object,
  onClose: PropTypes.func,
};

export default withStyles(styles)(TaskForm);
