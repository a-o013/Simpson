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
import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';
import FormEmployee from "./FormEmployee"

const  sampleEmployee = {
  quote: 'Shoplifting is a victimless crime, like punching someone in the dark.',
  character: 'Nelson Muntz',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72/NelsonMuntz.png?1497567511185'
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        employee: sampleEmployee,
        work: props.work
      };
    }
    handleClick = () => {
      this.setState({ work: !this.state.work });
    };
    getEmployee() {
      // Récupération de l'employé via fetch
      fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(response  =>  response.json())
        .then(data  => {
          // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
          this.setState({
            employee:  data[0],
          });
      });
    }
  render() {
    const working = this.state.work ? 'one' : 'App-logo';
    return (
      <div className="App">
      <FormEmployee />

      <GenerateEmployee selectEmployee={() =>  this.getEmployee()} />
      <DisplayEmployee  employee={this.state.employee}  />

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