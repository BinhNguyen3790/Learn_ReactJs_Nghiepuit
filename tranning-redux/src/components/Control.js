import React, { Component } from 'react';
import ControlSearch from '../components/ControlSearch';
import ControlSort from '../components/ControlSort';
import { connect } from 'react-redux';
import { actSearchTask, actSortTask } from '../actions';

class Control extends Component {
  render() {
    var { onSearch, onSort, showSort } = this.props;
    return (
      <div className="row">
        {/* Search */}
        <ControlSearch onSearch={onSearch} />
        {/* Sort */}
        <ControlSort onSort={onSort} showSort={showSort} />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    showSort: state.sortTask
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actSearchTask(keyword))
    },
    onSort: (sort) => {
      dispatch(actSortTask(sort))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);