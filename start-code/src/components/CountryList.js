import React, { Component } from "react";
import CountryItem from "./CountryItem";

class CountryList extends Component {
  renderCountries = array => {
    const countries = array.map((item, i) => (
      <CountryItem
        item={item}
        key={i}
        selectedCountry={this.props.selectedCountry}
      ></CountryItem>
    ));
    return countries;
  };
  render() {
    return <>{this.renderCountries(this.props.array)}</>;
  }
}
export default CountryList;
