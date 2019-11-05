import React, { Component } from "react";
import { Link } from "react-router-dom";

class TableRow extends Component {
  render() {
    return (
      <li>
        <Link key={this.props.border} to={`/${this.props.border}`}>
          {this.props.border}
        </Link>
      </li>
    );
  }
}

export default TableRow;
