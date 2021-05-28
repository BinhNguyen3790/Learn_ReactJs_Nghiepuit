import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class ControlSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  onSearch = () => {
    this.props.onSearch(this.state.search);
  }

  render() {
    var { search } = this.state;
    return (
      <div className="col-md-8">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search...." name="search" value={search} onChange={this.onChange} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={this.onSearch}><i className="fas fa-search"></i> Search</button>
          </div>
        </div>
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
      dispatch(actions.searchTask(keyword));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlSearch);