import React, { Component } from 'react';
import './Search.css';

// FIXME : change internal state for redux-form
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
    this.search = this.search.bind(this);
  }

  search(ev) {
    this.setState({value: ev.target.value});
  }

  render() {
    return (<div className="search">
        <input id="q"
               className="q"
               type="text"
               value={this.state.value}
               placeholder="Search a track"
               onChange={this.search}
               />
        </div>);
  }
}

export default Search;
