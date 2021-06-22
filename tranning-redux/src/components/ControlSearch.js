import React, { Component } from 'react';

class ControlSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
  };

  render() {
    var { keyword } = this.props;
    return (
      <div className="col-md-8">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search...." name="search" value={keyword} onChange={this.onChange} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={this.onSearch()}><i className="fas fa-search"></i> Search</button>
          </div>
        </div>
      </div>
    )
  };

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  };

  onSearch = () => {
    this.props.onSearch(this.state.search)
  }

};

export default ControlSearch;