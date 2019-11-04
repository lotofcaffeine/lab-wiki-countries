import data from "./countries.json";

class CountryHandler {
  constructor() {
    this.data = data;
  }
  values = () => {
    return this.data;
  };
  getOne = () => {
    return this.data[1];
  };
  searchBy = term => {
    if (term === "") {
      return this.data;
    }
    let response = this.data.filter(({ name }) => {
      let realName = name.official.toLocaleLowerCase();
      return realName.includes(term);
    });

    console.log(response);
    return response;
  };

  getCountryBy = value => {
    let index = this.data.findIndex(item => {
      return item.cca3 === value;
    });
    return this.data[index];
  };
}

export default CountryHandler;
