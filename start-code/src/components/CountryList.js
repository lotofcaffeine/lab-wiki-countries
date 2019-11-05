import React, { Component } from "react";
import CountryItem from "./CountryItem";

class CountryList extends Component {
  render() {
    return (
      <>
        {this.props.array.map((item, i) => (
          <CountryItem
            item={item}
            key={i}
            selectedCountry={this.props.selectedCountry}
          ></CountryItem>
        ))}
      </>
    );
  }
}
export default CountryList;
