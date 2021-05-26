import React, { Component } from 'react';
import ControlSearch from '../components/ControlSearch';
import ControlSort from '../components/ControlSort';

class Control extends Component {
  render() {
    return (

      <div className="row">
        {/* Search */}
        <ControlSearch onSearch={this.props.onSearch} />
        {/* Sort */}
        <ControlSort onSort={this.props.onSort} sortBy={this.props.sortBy} sortValue={this.props.sortValue} />
      </div>
    )
  }
};

export default Control;