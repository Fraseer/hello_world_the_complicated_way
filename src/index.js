import React, { Component } from "react";
import ReactDOM from "react-dom";

class HelloWorld extends Component {
  state = {
    planet: "Venus",
  };
  render() {
    // const planet = 'Mars'
    const planet = this.state.planet;
    return (
      <div>
        <h1>Hello {planet}!</h1>
        <input
          type="text"
          placeholder="Name a planet"
          onChange={(event) => {
            this.setState({ planet: event.target.value });
          }}
        ></input>
      </div>
    );
  }
}

// const HelloWorld = () => {
//   return <h2>Hello World</h2>;
// };

ReactDOM.render(<HelloWorld />, document.getElementById("app"));
