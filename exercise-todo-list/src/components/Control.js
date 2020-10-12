import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort.js';

class Control extends Component {
  render() {
    return (
      <div className="row">
        {/* Search */}
        <Search />
        {/* Sort */}
        <Sort />
      </div>
    )
  }
}

export default Control
