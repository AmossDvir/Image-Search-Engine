import React from "react";

class SearchBar extends React.Component {
  state = { searchQuery: "" };

  onFormSubmit=(event)=>{
      event.preventDefault();
      this.props.onSubmit(this.state.searchQuery);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field" style={{ textAlign: "center" }}>
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => {
                this.setState({ searchQuery: e.target.value });
              }}
              value={this.state.searchQuery}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
