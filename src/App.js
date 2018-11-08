import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
import Lamp from "./Lamp"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        work: props.work
      };
    }
    handleClick = () => {
      this.setState({ work: !this.state.work });
    };
  render() {
    const working = this.state.work ? 'one' : 'App-logo';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" className={working} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick}>Work</button>
        <Lamp on />
        <Lamp />
        <Quotes />
      </div>
    );
  }
}

export default App;