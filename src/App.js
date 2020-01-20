import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    const response = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      console.log("usr", users);
    };
    response();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
