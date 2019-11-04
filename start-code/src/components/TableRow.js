import React, { Component } from "react";

class TableRow extends Component {
  onSelected = e => {
    e.preventDefault();
    this.props.getFlag(this.props.border);
  };
  render() {
    return (
      <div>
        <a onClick={this.onSelected} href="">
          {this.props.border}
        </a>
      </div>
    );
  }
}

export default TableRow;
