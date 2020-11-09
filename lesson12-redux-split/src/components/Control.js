import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort.js';

class Control extends Component {
  render() {
    return (
      <div className="row">
        {/* Search */}
        <Search onSearch={this.props.onSearch} />
        {/* Sort */}
        <Sort onSort={this.props.onSort} sortBy={this.props.sortBy} sortValue={this.props.sortValue} />
      </div>
    )
  }
}

export default Control
