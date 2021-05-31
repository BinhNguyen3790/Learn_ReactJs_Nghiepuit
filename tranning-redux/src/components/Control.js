import React, { Component } from 'react';
import ControlSearch from '../components/ControlSearch';
import ControlSort from '../components/ControlSort';

class Control extends Component {
  render() {
    return (
      <div className="row">
        {/* Search */}
        <ControlSearch />
        {/* Sort */}
        <ControlSort />
      </div>
    )
  }
};

export default Control;