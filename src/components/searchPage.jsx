import React, { Component } from "react";
import { create } from "apisauce";
import { Button, Form, FormGroup, Input } from "reactstrap";
import CardList from "./result";

class SearchPage extends Component {
  state = {
    searchData: [],
    searchText: "",
    error: false,
  };

  handleSearch = async (name) => {
    const api = create({
      baseURL: "https://itunes.apple.com",
    });
    try {
      const response = await api.get("/search?term=" + name);
      this.setState({ searchData: response.data.results });
      console.log(response.data.results);
    } catch (err) {
      this.setState({ error: true });
      console.log(err);
    }
  };

  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleSearch(this.state.searchText);
  };

  result = () => {
    if (this.state.error)
      return <h3>Error Occured, Refresh the page and search again</h3>;
    else if (this.state.error === false && this.state.searchData.length !== 0)
      return <CardList result={this.state.searchData} />;
  };

  render() {
    return (
      <div>
        <div className="container text-center">
          <Form onSubmit={this.handleSubmit} className="mx-auto mb-4">
            <FormGroup>
              <Input
                type="text"
                name="search"
                id="searchTerm"
                placeholder="Song, Artist etc."
                value={this.state.searchText}
                onChange={(e) => this.handleChange(e)}
                className="m-2"
              />
            </FormGroup>
            <Button
              color="primary"
              disabled={this.state.searchText === "" ? true : false}
            >
              Search
            </Button>
          </Form>
          {this.result()}
        </div>
      </div>
    );
  }
}

export default SearchPage;
