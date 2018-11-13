import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
import Lamp from "./Lamp"
import MyTimer from "./MyTimer"
import NameForm from "./NameForm"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Home"
import Histoire from "./History"
import Navigation from "./Navigation";


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

        <BrowserRouter>
        <div>
        <Navigation />
          <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/notre-histoire" component={Histoire}/>
          </Switch>
        </div>
        </BrowserRouter>

        <header className="App-header">
          <img src={logo} className="App-logo" className={working} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <MyTimer />
          <NameForm />
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