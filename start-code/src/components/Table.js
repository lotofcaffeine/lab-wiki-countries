import React, { Component } from "react";
import TableRow from "./TableRow";
import CountryHandler from "../apis/CountryHandler";

class Table extends Component {
  api = new CountryHandler();

  state = {
    country: "",
    objSelected: this.api.getCountryBy(this.props.match.params.id)
  };
  getFlag = flag => {
    return this.api.getCountryBy(flag);
  };

  componentDidUpdate = () => {
    if (this.props.match.params.id !== this.state.objSelected.cca3) {
      this.setState({ objSelected: this.getFlag(this.props.match.params.id) });
    }
  };

  renderTableRow = () => {
    const countries = this.state.objSelected.borders.map((border, i) => (
      <TableRow border={border} key={border}></TableRow>
    ));
    return countries;
  };

  render() {
    const { capital, area, name, region } = this.state.objSelected;
    return (
      <div className="col-7">
        <h1> {name.official}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{capital[0]}</td>
            </tr>
            <tr>
              <td style={{ width: "30%" }}>Region</td>
              <td>{region}</td>
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
                <ul>{this.renderTableRow()}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
