import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryItem extends Component {
  onSelected = () => {
    this.props.selectedCountry(this.props.item);
  };

  render() {
    const { flag, name } = this.props.item;

    return (
      <div
        className="list-group-item list-group-item-action"
        onClick={this.onSelected}
      >
        {flag} {name.official}
      </div>
    );
  }
}
export default CountryItem;
