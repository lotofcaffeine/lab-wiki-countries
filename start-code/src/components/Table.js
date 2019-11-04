import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  renderTableRow = objItem => {
    const countries = objItem.borders.map((border, i) => (
      <TableRow border={border} key={i} getFlag={this.props.getFlag}></TableRow>
    ));
    return countries;
  };
  componentDidUpdate = () => {};

  render() {
    const { capital, area } = this.props.item;
    return (
      <div className="col-7">
        <h1></h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{this.renderTableRow(this.props.item)}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
