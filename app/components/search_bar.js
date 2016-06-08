import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Type here' };
  }

  render(){
    return (
      <div>
        <input className="search-bar"
        value={this.state.term}
        onChange = {event => this.setState({term: event.target.value })} />
      </div>
    );
  }
}


export default SearchBar;
