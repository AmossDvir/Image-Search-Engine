import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (searchQuery) => {
    const response = await unsplash.get("/search/photos", {
    params: { query: searchQuery },
    
    });
    this.setState({ images:response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px", width: "50%" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
export default App;
