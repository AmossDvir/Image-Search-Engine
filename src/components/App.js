import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (searchQuery) => {
    console.log(searchQuery);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query: searchQuery },
    headers:{
      Authorization: "Client-ID k_gN-6Y8O-NynAXs6ooxn-MwnLnY7v3hrqCQ69f-6oo"
    }
    });
    console.log(this);
    this.setState({ images:response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px", width: "50%" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        Found { this.state.images.length } Images.
      </div>
    );
  }
}
export default App;
