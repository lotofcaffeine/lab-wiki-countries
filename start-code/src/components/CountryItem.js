import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryItem extends Component {
  render() {
    const { flag, name, cca3 } = this.props.item;

    return (
      <Link className="list-group-item list-group-item-action" to={`/${cca3}`}>
        {flag} {name.official}
      </Link>
    );
  }
}
export default CountryItem;
