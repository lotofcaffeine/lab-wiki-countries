import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  };

  onInputChange = e => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.onFormSubmit} className="" action="">
          <div className="content">
            <input
              className="search"
              type="text"
              value={this.props.term}
              onChange={this.onInputChange}
              placeholder={this.props.placeholder}
            />
          </div>
        </form>
      </div>
    );
  }
}

//onClick
//onChange
//onSubmit

export default SearchBar;
