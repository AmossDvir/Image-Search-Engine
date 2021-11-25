import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component{

    onSearchSubmit = (searchQuery) =>{
        console.log(searchQuery);
    }
    render() {
    return (
      <div className="ui container" style={{ marginTop: "50px", width: "50%" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
      </div>
    );
  }
}
export default App;
