import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }

  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked
    })
  }

  render() {
    var { isChecked } = this.state;
    return (
      <div className="Contact">
        <h1>Contact Page</h1>
        <button type="button" className="btn btn-info mr-2" onClick={() => this.onClick(false)}>Allow</button>
        <button type="button" className="btn btn-danger" onClick={() => this.onClick(true)}>Not Allow</button>
        <Prompt when={isChecked} message={location => (`are you want to go ${location.pathname}`)} />
      </div>
    )
  }
}

export default Contact;
