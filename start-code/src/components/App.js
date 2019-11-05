import React, { Component } from "react";
import NavBar from "./NavBar";
import CountryList from "./CountryList";
import CountryHandler from "../apis/CountryHandler";
import Table from "./Table";
import SearchBar from "./SearchBar";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  api = new CountryHandler();
  state = {
    data: this.api.values(),
    term: ""
  };

  onSearchSubmit = term => {
    this.setState({ data: this.api.searchBy(term), term: term });
  };
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <SearchBar
                term={this.state.term}
                onSearch={this.onSearchSubmit}
                placeholder="Search a country"
              ></SearchBar>

              <CountryList
                array={this.state.data}
                selectedCountry={this.selectedCountry}
              ></CountryList>
            </div>
            <Switch>
              <Route path="/:id" component={Table} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
