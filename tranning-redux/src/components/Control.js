import React, { Component } from 'react';
import ControlSearch from '../components/ControlSearch';
import ControlSort from '../components/ControlSort';
import { connect } from 'react-redux';
import { actSearchTask } from '../actions';

class Control extends Component {
  render() {
    var { onSearch } = this.props;
    return (
      <div className="row">
        {/* Search */}
        <ControlSearch onSearch={onSearch} />
        {/* Sort */}
        <ControlSort />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actSearchTask(keyword))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);